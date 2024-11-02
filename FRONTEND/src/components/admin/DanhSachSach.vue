<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const sachList = ref([]);
const selectedSach = ref(null);
const showModal = ref(false);
const newImageFile = ref(null);

// Pagination logic
const currentPage = ref(1);
const recordsPerPage = 10;

const totalPages = computed(() => {
    return Math.ceil(sachList.value.length / recordsPerPage);
});

const paginatedSachList = computed(() => {
    const start = (currentPage.value - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return sachList.value.slice(start, end);
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
    <div class="flex h-screen relative">

        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full"> <!--?-->
            <div class="w-full py-[25px] px-10 border-2">
                <div class="text-4xl font-bold text-[#a0522d] text-center drop-shadow-md">QUẢN LÝ SÁCH THƯ VIỆN
                </div>
            </div>

            <!-- Table with pagination -->
            <div class="w-full max-h-screen p-6">
                <div class="bg-white mb-8 text-[12px]">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th class="py-2 px-4 border-[1px]">Mã Sách</th>
                                <th class="py-2 px-4 border-[1px]">Tên Sách</th>
                                <th class="py-2 px-4 border-[1px]">Đơn Giá</th>
                                <th class="py-2 px-4 border-[1px]">Số Quyển</th>
                                <th class="py-2 px-4 border-[1px]">Năm Xuất Bản</th>
                                <th class="py-2 px-4 border-[1px]">Mã NXB</th>
                                <th class="py-2 px-4 border-[1px]">Nguồn Gốc</th>
                                <th class="py-2 px-4 border-[1px]">Thể Loại</th>
                                <th class="py-2 px-4 border-[1px]">Hình Ảnh</th>
                                <th class="py-2 px-4 border-[1px]">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="sach in paginatedSachList" :key="sach._id">
                                <td class="py-2 px-4 border-[1px]">{{ sach.MaSach }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.TenSach }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.DonGia }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.SoQuyen }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.NamXuatBan }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.MaNXB }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.NguonGoc }}</td>
                                <td class="py-2 px-4 border-[1px]">{{ sach.TheLoai }}</td>
                                <td class="py-2 px-4 border-[1px]">
                                    <img :src="sach.HinhAnh" alt="Hình ảnh sách" class="h-10 w-10 object-cover" />
                                </td>
                                <td class="py-2 px-4 border-[1px] text-center">
                                    <button @click="openUpdateModal(sach)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Cập
                                        nhật</button>
                                    <button @click="deleteSach(sach._id)"
                                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2">Xóa</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between text-[12px]">
                    <button @click="() => router.push('/quantrivien/themsach')"
                        class="bg-[#a0522d] text-white px-5 flex justify-center items-center gap-x-2 font-bold hover:scale-110 transition-transform">
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span><span> Thêm sách </span>
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

    <div v-if="showModal && selectedSach" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4 text-center text-[#a0522d] font-bold">CẬP NHẬT THÔNG TIN</h3>
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