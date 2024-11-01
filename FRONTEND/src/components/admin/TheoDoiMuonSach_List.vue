<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted } from 'vue';

const theoDoiMuonSachList = ref([]);
const selectedTheoDoiMuonSach = ref(null);
const showModal = ref(false);

const fetchTheoDoiMuonSachList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/theodoimuonsach', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        theoDoiMuonSachList.value = await response.json();
    } catch (error) {
        console.error('Error fetching theo dõi mượn sách list:', error);
    }
};

const openUpdateModal = (theoDoiMuonSach) => {
    selectedTheoDoiMuonSach.value = { ...theoDoiMuonSach };
    showModal.value = true;
};

const updateTheoDoiMuonSach = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/theodoimuonsach/${selectedTheoDoiMuonSach.value._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ NgayTra: selectedTheoDoiMuonSach.value.NgayTra }),
        });
        const updatedTheoDoiMuonSach = await response.json();
        const index = theoDoiMuonSachList.value.findIndex(tdms => tdms._id === updatedTheoDoiMuonSach._id);
        if (index !== -1) {
            theoDoiMuonSachList.value[index] = updatedTheoDoiMuonSach;
        }
        showModal.value = false;
        selectedTheoDoiMuonSach.value = null;
    } catch (error) {
        console.error('Error updating theo dõi mượn sách:', error);
    }
};

const deleteTheoDoiMuonSach = async (id) => {
    try {
        await fetch(`http://localhost:3000/api/theodoimuonsach/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        theoDoiMuonSachList.value = theoDoiMuonSachList.value.filter(tdms => tdms._id !== id);
    } catch (error) {
        console.error('Error deleting theo dõi mượn sách:', error);
    }
};

onMounted(fetchTheoDoiMuonSachList);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="p-6 bg-gray-100">
            <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                <h2 class="text-3xl font-semibold text-[#333f48] mb-6">Danh sách theo dõi mượn sách</h2>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Mã Độc Giả</th>
                            <th class="py-2 px-4 border-b">Mã Sách</th>
                            <th class="py-2 px-4 border-b">Ngày Mượn</th>
                            <th class="py-2 px-4 border-b">Ngày Trả</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="theoDoiMuonSach in theoDoiMuonSachList" :key="theoDoiMuonSach._id">
                            <td class="py-2 px-4 border-b">{{ theoDoiMuonSach.MaDocGia }}</td>
                            <td class="py-2 px-4 border-b">{{ theoDoiMuonSach.MaSach }}</td>
                            <td class="py-2 px-4 border-b">{{ new Date(theoDoiMuonSach.NgayMuon).toLocaleDateString() }}
                            </td>
                            <td class="py-2 px-4 border-b">{{ theoDoiMuonSach.NgayTra ? new
                                Date(theoDoiMuonSach.NgayTra).toLocaleDateString() : 'Chưa trả' }}</td>
                            <td class="py-2 px-4 border-b">
                                <button @click="openUpdateModal(theoDoiMuonSach)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteTheoDoiMuonSach(theoDoiMuonSach._id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedTheoDoiMuonSach"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4">Update Theo Dõi Mượn Sách</h3>
            <form @submit.prevent="updateTheoDoiMuonSach">
                <div class="mb-4">
                    <label for="MaDocGia" class="block text-sm font-medium text-gray-700">Mã Độc Giả</label>
                    <input v-model="selectedTheoDoiMuonSach.MaDocGia" type="text" id="MaDocGia"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="MaSach" class="block text-sm font-medium text-gray-700">Mã Sách</label>
                    <input v-model="selectedTheoDoiMuonSach.MaSach" type="text" id="MaSach"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="NgayMuon" class="block text-sm font-medium text-gray-700">Ngày Mượn</label>
                    <div id="NgayMuon" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2 bg-gray-100">
                        {{ new Date(selectedTheoDoiMuonSach.NgayMuon).toLocaleDateString() }}
                    </div>
                </div>
                <div class="mb-4">
                    <label for="NgayTra" class="block text-sm font-medium text-gray-700">Ngày Trả</label>
                    <input v-model="selectedTheoDoiMuonSach.NgayTra" type="date" id="NgayTra"
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