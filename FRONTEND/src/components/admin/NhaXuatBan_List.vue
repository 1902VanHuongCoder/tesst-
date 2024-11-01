<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted } from 'vue';

const nhaXuatBanList = ref([]);
const selectedNhaXuatBan = ref(null);
const showModal = ref(false);

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
        <div class="p-6 bg-gray-100">
            <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                <h2 class="text-3xl font-semibold text-[#333f48] mb-6">Danh sách nhà xuất bản</h2>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Mã NXB</th>
                            <th class="py-2 px-4 border-b">Tên NXB</th>
                            <th class="py-2 px-4 border-b">Địa Chỉ</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="nhaXuatBan in nhaXuatBanList" :key="nhaXuatBan._id">
                            <td class="py-2 px-4 border-b">{{ nhaXuatBan.MaNXB }}</td>
                            <td class="py-2 px-4 border-b">{{ nhaXuatBan.TenNXB }}</td>
                            <td class="py-2 px-4 border-b">{{ nhaXuatBan.DiaChi }}</td>
                            <td class="py-2 px-4 border-b">
                                <button @click="openUpdateModal(nhaXuatBan)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteNhaXuatBan(nhaXuatBan._id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedNhaXuatBan" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4">Update Nhà Xuất Bản</h3>
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