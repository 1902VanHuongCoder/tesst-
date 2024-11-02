<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const docGiaList = ref([]);
const selectedDocGia = ref(null);
const showModal = ref(false);

// Pagination logic
const currentPage = ref(1);
const recordsPerPage = 10;

const totalPages = computed(() => {
    return Math.ceil(docGiaList.value.length / recordsPerPage);
});

const paginatedDocGiaList = computed(() => {
    const start = (currentPage.value - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return docGiaList.value.slice(start, end);
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

const fetchDocGiaList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/docgia', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        docGiaList.value = await response.json();
    } catch (error) {
        console.error('Error fetching độc giả list:', error);
    }
};

const openUpdateModal = (docGia) => {
    selectedDocGia.value = { ...docGia };
    showModal.value = true;
};

const updateDocGia = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/docgia/${selectedDocGia.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(selectedDocGia.value),
        });
        const updatedDocGia = await response.json();
        const index = docGiaList.value.findIndex(dg => dg._id === updatedDocGia._id);
        if (index !== -1) {
            docGiaList.value[index] = updatedDocGia;
        }
        showModal.value = false;
        selectedDocGia.value = null;
    } catch (error) {
        console.error('Error updating độc giả:', error);
    }
};

const deleteDocGia = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/docgia/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        docGiaList.value = docGiaList.value.filter(dg => dg._id !== id);
    } catch (error) {
        console.error('Error deleting độc giả:', error);
    }
};

onMounted(fetchDocGiaList);
</script>
<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full "> <!--?-->
            <div class="w-full py-[25px] px-10 border-b-2 bg-[#a0522d] shadow-lg">
                <div class="text-4xl font-bold  text-center text-white drop-shadow-xl"> QUẢN LÝ ĐỌC GIẢ
                </div>
            </div>
            <div class="bg-white text-[12px] w-full max-h-screen p-6">
                <table class="min-w-full bg-white mb-8">
                    <thead>
                        <tr class="font-bold bg-[#a0522d] text-white">
                            <th class="py-2 px-4">Mã Độc Giả</th>
                            <th class="py-2 px-4">Họ Lót</th>
                            <th class="py-2 px-4">Tên</th>
                            <th class="py-2 px-4">Ngày Sinh</th>
                            <th class="py-2 px-4">Phái</th>
                            <th class="py-2 px-4">Địa Chỉ</th>
                            <th class="py-2 px-4">Điện Thoại</th>
                            <th class="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="docGia in docGiaList" :key="docGia._id">
                            <td class="py-2 px-4 border">{{ docGia.MaDocGia }}</td>
                            <td class="py-2 px-4 border">{{ docGia.HoLot }}</td>
                            <td class="py-2 px-4 border">{{ docGia.Ten }}</td>
                            <td class="py-2 px-4 border">{{ new Date(docGia.NgaySinh).toLocaleDateString() }}</td>
                            <td class="py-2 px-4 border">{{ docGia.Phai }}</td>
                            <td class="py-2 px-4 border">{{ docGia.DiaChi }}</td>
                            <td class="py-2 px-4 border">{{ docGia.DienThoai }}</td>
                            <td class="py-2 px-4 border-[1px] text-center">
                                <button @click="openUpdateModal(docGia)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteDocGia(docGia._id)"
                                    class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="flex justify-between text-[12px]">
                    <button @click="() => router.push('/quantrivien/themdocgia')"
                        class="rounded-md bg-[#a0522d] text-white px-5 flex justify-center items-center gap-x-2 font-bold hover:scale-110 transition-transform">
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span><span> Thêm độc giả </span>
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

    <div v-if="showModal && selectedDocGia"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4 text-center text-[#a0522d] font-bold">CẬP NHẬT THÔNG TIN</h3>
            <form @submit.prevent="updateDocGia">
                <div class="mb-4">
                    <label for="MaDocGia" class="block text-sm font-medium text-gray-700">Mã Độc Giả</label>
                    <input v-model="selectedDocGia.MaDocGia" type="text" id="MaDocGia"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="HoLot" class="block text-sm font-medium text-gray-700">Họ Lót</label>
                    <input v-model="selectedDocGia.HoLot" type="text" id="HoLot"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="Ten" class="block text-sm font-medium text-gray-700">Tên</label>
                    <input v-model="selectedDocGia.Ten" type="text" id="Ten"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="NgaySinh" class="block text-sm font-medium text-gray-700">Ngày Sinh</label>
                    <input v-model="selectedDocGia.NgaySinh" type="date" id="NgaySinh"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="Phai" class="block text-sm font-medium text-gray-700">Phái</label>
                    <input v-model="selectedDocGia.Phai" type="text" id="Phai"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DiaChi" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                    <input v-model="selectedDocGia.DiaChi" type="text" id="DiaChi"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DienThoai" class="block text-sm font-medium text-gray-700">Điện Thoại</label>
                    <input v-model="selectedDocGia.DienThoai" type="text" id="DienThoai"
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