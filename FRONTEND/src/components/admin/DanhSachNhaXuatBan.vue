<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nhaXuatBanList = ref([]);
const selectedNhaXuatBan = ref(null);
const showModal = ref(false);

// Pagination logic
const currentPage = ref(1);
const recordsPerPage = 10;

const totalPages = computed(() => {
    return Math.ceil(nhaXuatBanList.value.length / recordsPerPage);
});

const paginatedNhaXuatBanList = computed(() => {
    const start = (currentPage.value - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return nhaXuatBanList.value.slice(start, end);
});

const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
        currentPage.value = page;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const fetchNhaXuatBanList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/nhaxuatban', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        nhaXuatBanList.value = await response.json();
    } catch (error) {
        console.error('Error fetching nhà xuất bản list:', error);
    }
};

const openUpdateModal = (nhaXuatBan) => {
    selectedNhaXuatBan.value = { ...nhaXuatBan };
    showModal.value = true;
};

const updateNhaXuatBan = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/nhaxuatban/${selectedNhaXuatBan.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(selectedNhaXuatBan.value),
        });
        const updatedNhaXuatBan = await response.json();
        const index = nhaXuatBanList.value.findIndex(nxb => nxb._id === updatedNhaXuatBan._id);
        if (index !== -1) {
            nhaXuatBanList.value[index] = updatedNhaXuatBan;
        }
        showModal.value = false;
        selectedNhaXuatBan.value = null;
    } catch (error) {
        console.error('Error updating nhà xuất bản:', error);
    }
};

const deleteNhaXuatBan = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/nhaxuatban/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        nhaXuatBanList.value = nhaXuatBanList.value.filter(nxb => nxb._id !== id);
    } catch (error) {
        console.error('Error deleting nhà xuất bản:', error);
    }
};

onMounted(fetchNhaXuatBanList);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full"> <!--?-->
            <div class="w-full py-[25px] px-10 border-2">
                <div class="text-4xl font-bold text-[#a0522d] text-center drop-shadow-md">QUẢN LÝ THÔNG TIN NHÀ XUẤT BẢN
                </div>
            </div>

            <!-- Table with pagination -->
            <div class="w-full max-h-screen p-6">
                <div class="bg-white mb-8 text-[12px]">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border">Mã NXB</th>
                                <th class="py-2 px-4 border">Tên NXB</th>
                                <th class="py-2 px-4 border">Địa Chỉ</th>
                                <th class="py-2 px-4 border">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="nhaXuatBan in nhaXuatBanList" :key="nhaXuatBan._id">
                                <td class="py-2 px-4 border">{{ nhaXuatBan.MaNXB }}</td>
                                <td class="py-2 px-4 border">{{ nhaXuatBan.TenNXB }}</td>
                                <td class="py-2 px-4 border">{{ nhaXuatBan.DiaChi }}</td>
                                <td class="py-2 px-4 border text-center">
                                    <button @click="openUpdateModal(nhaXuatBan)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                    <button @click="deleteNhaXuatBan(nhaXuatBan._id)"
                                        class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between text-[12px]">
                    <button @click="() => router.push('/quantrivien/themnhaxuatban')"
                        class="bg-[#a0522d] text-white px-5 flex justify-center items-center gap-x-2 font-bold hover:scale-110 transition-transform">
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span><span> Thêm nhà xuất bản </span>
                    </button>
                    <div class="flex justify-end text-[12px] space-x-2">
                        <button @click="prevPage" :disabled="currentPage === 1"
                            class="px-4 py-2 bg-gray-300 rounded">Trước</button>
                        <button v-for="page in totalPages" :key="page" @click="goToPage(page)"
                            :class="['px-4 py-2 rounded', { 'bg-blue-500 text-white': currentPage === page, 'bg-gray-300': currentPage !== page }]">
                            {{ page }}
                        </button>
                        <button @click="nextPage" :disabled="currentPage === totalPages"
                            class="px-4 py-2 bg-gray-300 rounded">Sau</button>
                    </div>
                </div>
            </div>
        </div>





    </div>

    <div v-if="showModal && selectedNhaXuatBan"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4 text-center text-[#a0522d] font-bold">CẬP NHẬT THÔNG TIN</h3>
            <form @submit.prevent="updateNhaXuatBan">
                <div class="mb-4">
                    <label for="MaNXB" class="block text-sm font-medium text-gray-700">Mã NXB</label>
                    <input v-model="selectedNhaXuatBan.MaNXB" type="text" id="MaNXB"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="TenNXB" class="block text-sm font-medium text-gray-700">Tên NXB</label>
                    <input v-model="selectedNhaXuatBan.TenNXB" type="text" id="TenNXB"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DiaChi" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                    <input v-model="selectedNhaXuatBan.DiaChi" type="text" id="DiaChi"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="flex justify-end">
                    <button type="button" @click="showModal = false"
                        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>