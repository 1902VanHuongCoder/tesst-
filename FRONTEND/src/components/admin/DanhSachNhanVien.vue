<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const nhanVienList = ref([]);
const selectedNhanVien = ref(null);
const showModal = ref(false);

// Pagination logic
const currentPage = ref(1);
const recordsPerPage = 10;

const totalPages = computed(() => {
    return Math.ceil(nhanVienList.value.length / recordsPerPage);
});

const paginatedNhanVienList = computed(() => {
    const start = (currentPage.value - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return nhanVienList.value.slice(start, end);
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

const fetchNhanVienList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/nhanvien', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        nhanVienList.value = await response.json();
    } catch (error) {
        console.error('Error fetching nhân viên list:', error);
    }
};

const openUpdateModal = (nhanVien) => {
    selectedNhanVien.value = { ...nhanVien };
    showModal.value = true;
};

const updateNhanVien = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/nhanvien/${selectedNhanVien.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(selectedNhanVien.value),
        });
        const updatedNhanVien = await response.json();
        const index = nhanVienList.value.findIndex(nv => nv._id === updatedNhanVien._id);
        if (index !== -1) {
            nhanVienList.value[index] = updatedNhanVien;
        }
        showModal.value = false;
        selectedNhanVien.value = null;
    } catch (error) {
        console.error('Error updating nhân viên:', error);
    }
};

const deleteNhanVien = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/nhanvien/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        nhanVienList.value = nhanVienList.value.filter(nv => nv._id !== id);
    } catch (error) {
        console.error('Error deleting nhân viên:', error);
    }
};

onMounted(fetchNhanVienList);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full"> <!--?-->
            <div class="w-full py-[25px] px-10 border-2">
                <div class="text-4xl font-bold text-[#a0522d] text-center drop-shadow-md">QUẢN LÝ NHÂN VIÊN
                </div>
            </div>

            <!-- Table with pagination -->
            <div class="w-full max-h-screen p-6">
                <div class="bg-white mb-8 text-[12px]">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border">MSNV</th>
                                <th class="py-2 px-4 border">Họ Tên</th>
                                <th class="py-2 px-4 border">Chức Vụ</th>
                                <th class="py-2 px-4 border">Địa Chỉ</th>
                                <th class="py-2 px-4 border">Điện Thoại</th>
                                <th class="py-2 px-4 border">Mật Khẩu</th>
                                <th class="py-2 px-4 border">Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="nhanVien in nhanVienList" :key="nhanVien._id">
                                <td class="py-2 px-4 border">{{ nhanVien.MSNV }}</td>
                                <td class="py-2 px-4 border">{{ nhanVien.HoTenNV }}</td>
                                <td class="py-2 px-4 border">{{ nhanVien.ChucVu }}</td>
                                <td class="py-2 px-4 border">{{ nhanVien.DiaChi }}</td>
                                <td class="py-2 px-4 border">{{ nhanVien.DienThoai }}</td>
                                <td class="py-2 px-4 border">{{ nhanVien.MatKhau }}</td>
                                <td class="py-2 px-4 border text-center">
                                    <button @click="openUpdateModal(nhanVien)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                    <button @click="deleteNhanVien(nhanVien._id)"
                                        class=" bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between text-[12px]">
                    <button @click="() => router.push('/quantrivien/themnhanvien')"
                        class="bg-[#a0522d] text-white px-5 flex justify-center items-center gap-x-2 font-bold hover:scale-110 transition-transform">
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span><span> Thêm nhân viên </span>
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

    <div v-if="showModal && selectedNhanVien"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4 text-center text-[#a0522d] font-bold">CẬP NHẬT THÔNG TIN</h3>
            <form @submit.prevent="updateNhanVien">
                <div class="mb-4">
                    <label for="MSNV" class="block text-sm font-medium text-gray-700">MSNV</label>
                    <input v-model="selectedNhanVien.MSNV" type="text" id="MSNV"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="HoTenNV" class="block text-sm font-medium text-gray-700">Họ Tên</label>
                    <input v-model="selectedNhanVien.HoTenNV" type="text" id="HoTenNV"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="ChucVu" class="block text-sm font-medium text-gray-700">Chức Vụ</label>
                    <input v-model="selectedNhanVien.ChucVu" type="text" id="ChucVu"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DiaChi" class="block text-sm font-medium text-gray-700">Địa Chỉ</label>
                    <input v-model="selectedNhanVien.DiaChi" type="text" id="DiaChi"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DienThoai" class="block text-sm font-medium text-gray-700">Điện Thoại</label>
                    <input v-model="selectedNhanVien.DienThoai" type="text" id="DienThoai"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="MatKhau" class="block text-sm font-medium text-gray-700">Mật Khẩu</label>
                    <input v-model="selectedNhanVien.MatKhau" type="text" id="MatKhau"
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