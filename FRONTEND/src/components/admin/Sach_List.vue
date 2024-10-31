<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted } from 'vue';

const sachList = ref([]);
const selectedSach = ref(null);
const showModal = ref(false);
const newImageFile = ref(null);

const fetchSachList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/sach', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        sachList.value = await response.json();
    } catch (error) {
        console.error('Error fetching sách list:', error);
    }
};

const openUpdateModal = (sach) => {
    selectedSach.value = { ...sach };
    showModal.value = true;
};

function onFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        newImageFile.value = file;
    } else {
        console.error('No file selected');
    }
}

const updateSach = async () => {
    console.log(selectedSach.value._id);
    try {
        const formData = new FormData();
        formData.append('MaSach', selectedSach.value.MaSach);
        formData.append('TenSach', selectedSach.value.TenSach);
        formData.append('DonGia', selectedSach.value.DonGia);
        formData.append('SoQuyen', selectedSach.value.SoQuyen);
        formData.append('NamXuatBan', selectedSach.value.NamXuatBan);
        formData.append('MaNXB', selectedSach.value.MaNXB);
        formData.append('NguonGoc', selectedSach.value.NguonGoc);
        formData.append('TheLoai', selectedSach.value.TheLoai);
        if (newImageFile.value) {
            formData.append('HinhAnh', newImageFile.value);
        }

        const response = await fetch(`http://localhost:3000/api/sach/${selectedSach.value._id}`, {
            method: 'PUT',
            body: formData,
        });
        const updatedSach = await response.json();
        const index = sachList.value.findIndex(sach => sach._id === updatedSach._id);
        if (index !== -1) {
            sachList.value[index] = updatedSach;
        }
        showModal.value = false;
        selectedSach.value = null;
        newImageFile.value = null;
    } catch (error) {
        console.error('Error updating sách:', error);
    }
};

const deleteSach = async (maSach) => {
    try {
        await fetch(`http://localhost:3000/api/sach/${maSach}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        sachList.value = sachList.value.filter(sach => sach._id !== maSach);
    } catch (error) {
        console.error('Error deleting sách:', error);
    }
};

onMounted(fetchSachList);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="p-6 bg-gray-100">
            <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                <h2 class="text-3xl font-semibold text-[#333f48] mb-6">Danh sách sách</h2>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th class="py-2 px-4 border-b">Mã Sách</th>
                            <th class="py-2 px-4 border-b">Tên Sách</th>
                            <th class="py-2 px-4 border-b">Đơn Giá</th>
                            <th class="py-2 px-4 border-b">Số Quyển</th>
                            <th class="py-2 px-4 border-b">Năm Xuất Bản</th>
                            <th class="py-2 px-4 border-b">Mã NXB</th>
                            <th class="py-2 px-4 border-b">Nguồn Gốc</th>
                            <th class="py-2 px-4 border-b">Thể Loại</th>
                            <th class="py-2 px-4 border-b">Hình Ảnh</th>
                            <th class="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="sach in sachList" :key="sach._id">
                            <td class="py-2 px-4 border-b">{{ sach.MaSach }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.TenSach }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.DonGia }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.SoQuyen }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.NamXuatBan }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.MaNXB }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.NguonGoc }}</td>
                            <td class="py-2 px-4 border-b">{{ sach.TheLoai }}</td>
                            <td class="py-2 px-4 border-b">
                                <img :src="sach.HinhAnh" alt="Hình ảnh sách" class="h-10 w-10 object-cover" />
                            </td>
                            <td class="py-2 px-4 border-b">
                                <button @click="openUpdateModal(sach)"
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                <button @click="deleteSach(sach._id)"
                                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedSach" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4">Update Sách</h3>
            <form @submit.prevent="updateSach">
                <div class="mb-4">
                    <label for="MaSach" class="block text-sm font-medium text-gray-700">Mã Sách</label>
                    <input v-model="selectedSach.MaSach" type="text" id="MaSach"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>

                <div class="mb-4">
                    <label for="TenSach" class="block text-sm font-medium text-gray-700">Tên Sách</label>
                    <input v-model="selectedSach.TenSach" type="text" id="TenSach"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="DonGia" class="block text-sm font-medium text-gray-700">Đơn Giá</label>
                    <input v-model="selectedSach.DonGia" type="number" id="DonGia"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="SoQuyen" class="block text-sm font-medium text-gray-700">Số Quyển</label>
                    <input v-model="selectedSach.SoQuyen" type="number" id="SoQuyen"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="NamXuatBan" class="block text-sm font-medium text-gray-700">Năm Xuất Bản</label>
                    <input v-model="selectedSach.NamXuatBan" type="text" id="NamXuatBan"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="MaNXB" class="block text-sm font-medium text-gray-700">Mã NXB</label>
                    <input v-model="selectedSach.MaNXB" type="text" id="MaNXB"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="NguonGoc" class="block text-sm font-medium text-gray-700">Nguồn Gốc</label>
                    <input v-model="selectedSach.NguonGoc" type="text" id="NguonGoc"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="TheLoai" class="block text-sm font-medium text-gray-700">Thể Loại</label>
                    <input v-model="selectedSach.TheLoai" type="text" id="TheLoai"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                </div>
                <div class="mb-4">
                    <label for="HinhAnh" class="block text-sm font-medium text-gray-700">Hình Ảnh</label>
                    <input v-model="selectedSach.HinhAnh" type="text" id="HinhAnh"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                    <input @change="onFileChange" type="file" id="newImage"
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