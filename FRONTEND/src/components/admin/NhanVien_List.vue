<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted } from 'vue';

const nhanVienList = ref([]);
const selectedNhanVien = ref(null);
const showModal = ref(false);

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
        <div class="p-6 bg-gray-100">
            <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                <h2 class="text-3xl font-semibold text-[#333f48] mb-6">Danh sách nhân viên</h2>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">MSNV</th>
                            <th class="py-2 px-4 border-b">Họ Tên</th>
                            <th class="py-2 px-4 border-b">Chức Vụ</th>
                            <th class="py-2 px-4 border-b">Địa Chỉ</th>
                            <th class="py-2 px-4 border-b">Điện Thoại</th>
                            <th class="py-2 px-4 border-b">Mật Khẩu</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="nhanVien in nhanVienList" :key="nhanVien._id">
                            <td class="py-2 px-4 border-b">{{ nhanVien.MSNV }}</td>
                            <td class="py-2 px-4 border-b">{{ nhanVien.HoTenNV }}</td>
                            <td class="py-2 px-4 border-b">{{ nhanVien.ChucVu }}</td>
                            <td class="py-2 px-4 border-b">{{ nhanVien.DiaChi }}</td>
                            <td class="py-2 px-4 border-b">{{ nhanVien.DienThoai }}</td>
                            <td class="py-2 px-4 border-b">{{ nhanVien.MatKhau }}</td>
                            <td class="py-2 px-4 border-b">
                                <button @click="openUpdateModal(nhanVien)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteNhanVien(nhanVien._id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedNhanVien" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4">Update Nhân Viên</h3>
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