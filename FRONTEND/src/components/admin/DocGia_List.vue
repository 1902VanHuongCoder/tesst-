<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted } from 'vue';

const docGiaList = ref([]);
const selectedDocGia = ref(null);
const showModal = ref(false);

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
        <div class="p-6 bg-gray-100">
            <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                <h2 class="text-3xl font-semibold text-[#333f48] mb-6">Danh sách độc giả</h2>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Mã Độc Giả</th>
                            <th class="py-2 px-4 border-b">Họ Lót</th>
                            <th class="py-2 px-4 border-b">Tên</th>
                            <th class="py-2 px-4 border-b">Ngày Sinh</th>
                            <th class="py-2 px-4 border-b">Phái</th>
                            <th class="py-2 px-4 border-b">Địa Chỉ</th>
                            <th class="py-2 px-4 border-b">Điện Thoại</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="docGia in docGiaList" :key="docGia._id">
                            <td class="py-2 px-4 border-b">{{ docGia.MaDocGia }}</td>
                            <td class="py-2 px-4 border-b">{{ docGia.HoLot }}</td>
                            <td class="py-2 px-4 border-b">{{ docGia.Ten }}</td>
                            <td class="py-2 px-4 border-b">{{ new Date(docGia.NgaySinh).toLocaleDateString() }}</td>
                            <td class="py-2 px-4 border-b">{{ docGia.Phai }}</td>
                            <td class="py-2 px-4 border-b">{{ docGia.DiaChi }}</td>
                            <td class="py-2 px-4 border-b">{{ docGia.DienThoai }}</td>
                            <td class="py-2 px-4 border-b">
                                <button @click="openUpdateModal(docGia)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteDocGia(docGia._id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedDocGia" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4">Update Độc Giả</h3>
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