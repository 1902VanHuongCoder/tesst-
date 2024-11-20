<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const theoDoiMuonSachList = ref([]);
const pendingBorrowList = ref([]);
const selectedTheoDoiMuonSach = ref(null);
const showModal = ref(false);

// Pagination logic
const currentPage = ref(1);
const recordsPerPage = 10;

const totalPages = computed(() => {
    return Math.ceil(theoDoiMuonSachList.value.filter(tdms => tdms.TrangThai).length / recordsPerPage);
});

const paginatedTheoDoiMuonSachList = computed(() => {
    const start = (currentPage.value - 1) * recordsPerPage;
    const end = start + recordsPerPage;
    return theoDoiMuonSachList.value.filter(tdms => tdms.TrangThai).slice(start, end);
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

const fetchTheoDoiMuonSachList = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/theodoimuonsach', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        const data = await response.json();
        theoDoiMuonSachList.value = data;
        pendingBorrowList.value = data.filter(tdms => !tdms.TrangThai);
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
            body: JSON.stringify({ 
                NgayTra: selectedTheoDoiMuonSach.value.NgayTra,
                HinhThucNhanSach: selectedTheoDoiMuonSach.value.HinhThucNhanSach
            }),
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
        pendingBorrowList.value = pendingBorrowList.value.filter(tdms => tdms._id !== id);
    } catch (error) {
        console.error('Error deleting theo dõi mượn sách:', error);
    }
};

const approveBorrow = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/theodoimuonsach/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ TrangThai: true }),
        });
        const updatedTheoDoiMuonSach = await response.json();
        const index = theoDoiMuonSachList.value.findIndex(tdms => tdms._id === updatedTheoDoiMuonSach._id);
        if (index !== -1) {
            theoDoiMuonSachList.value[index] = updatedTheoDoiMuonSach;
        }
        pendingBorrowList.value = pendingBorrowList.value.filter(tdms => tdms._id !== id);
    } catch (error) {
        console.error('Error approving borrow:', error);
    }
};

onMounted(fetchTheoDoiMuonSachList);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full">
            <div class="w-full py-[25px] px-10 border-b-2 bg-[#a0522d] shadow-lg">
                <div class="text-4xl font-bold  text-center text-white drop-shadow-xl"> QUẢN LÝ SÁCH MƯỢN TRẢ SÁCH
                </div>
            </div>

            <!-- Table with pagination -->
            <div class="w-full max-h-screen p-6">
                <div class="bg-white mb-8 text-[12px]">
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr class="font-bold bg-[#a0522d] text-white">
                                <th class="py-2 px-4">Mã Độc Giả</th>
                                <th class="py-2 px-4">Mã Sách</th>
                                <th class="py-2 px-4">Ngày Mượn</th>
                                <th class="py-2 px-4">Ngày Trả</th>
                                <th class="py-2 px-4">Hình thức nhận sách</th>
                                <th class="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="theoDoiMuonSach in paginatedTheoDoiMuonSachList" :key="theoDoiMuonSach._id">
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.MaDocGia }}</td>
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.MaSach }}</td>
                                <td class="py-2 px-4 border">{{ new Date(theoDoiMuonSach.NgayMuon).toLocaleDateString() }}</td>
                                <td class="py-2 px-4 border">
                                    <span :class="{'text-red-500': !theoDoiMuonSach.NgayTra}">
                                        {{ theoDoiMuonSach.NgayTra ? new Date(theoDoiMuonSach.NgayTra).toLocaleDateString() : 'Chưa trả' }}
                                    </span>
                                </td>
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.HinhThucNhanSach }}</td>
                                <td class="py-2 px-4 border text-center">
                                    <button @click="openUpdateModal(theoDoiMuonSach)"
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Update</button>
                                    <button @click="deleteTheoDoiMuonSach(theoDoiMuonSach._id)"
                                        class="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="flex justify-between text-[12px]">
                    <button @click="() => router.push('/quantrivien/themthongtinmuonsach')"
                        class="rounded-md bg-[#a0522d] text-white px-5 flex justify-center items-center gap-x-2 font-bold hover:scale-110 transition-transform">
                        <span>
                            <i class="fa-solid fa-plus"></i>
                        </span><span> Thêm thông tin mượn sách </span>
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

            <!-- Pending Borrow List -->
            <div class="w-full max-h-screen p-6">
                <div class="bg-white mb-8 text-[12px]">
                    <h2 class="text-2xl font-bold mb-4 text-center text-[#a0522d]">Danh sách đơn mượn chưa phê duyệt</h2>
                    <table class="min-w-full bg-white">
                        <thead>
                            <tr class="font-bold bg-[#a0522d] text-white">
                                <th class="py-2 px-4">Mã Độc Giả</th>
                                <th class="py-2 px-4">Mã Sách</th>
                                <th class="py-2 px-4">Ngày Mượn</th>
                                <th class="py-2 px-4">Hình thức nhận sách</th>
                                <th class="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="theoDoiMuonSach in pendingBorrowList" :key="theoDoiMuonSach._id">
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.MaDocGia }}</td>
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.MaSach }}</td>
                                <td class="py-2 px-4 border">{{ new Date(theoDoiMuonSach.NgayMuon).toLocaleDateString() }}</td>
                                <td class="py-2 px-4 border">{{ theoDoiMuonSach.HinhThucNhanSach }}</td>
                                <td class="py-2 px-4 border text-center">
                                    <button @click="approveBorrow(theoDoiMuonSach._id)"
                                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">Phê duyệt</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div v-if="showModal && selectedTheoDoiMuonSach"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h3 class="text-2xl mb-4 text-center text-[#a0522d] font-bold">CẬP NHẬT THÔNG TIN</h3>
            <form @submit.prevent="updateTheoDoiMuonSach">
                <div class="mb-4">
                    <label for="MaDocGia" class="block text-sm font-medium text-gray-700">Mã Độc Giả</label>
                    <input v-model="selectedTheoDoiMuonSach.MaDocGia" type="text" id="MaDocGia" readonly
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100" />
                </div>
                <div class="mb-4">
                    <label for="MaSach" class="block text-sm font-medium text-gray-700">Mã Sách</label>
                    <input v-model="selectedTheoDoiMuonSach.MaSach" type="text" id="MaSach" readonly
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm bg-gray-100" />
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
                <div class="mb-4">
                    <label for="HinhThucNhanSach" class="block text-sm font-medium text-gray-700">Hình thức nhận sách</label>
                    <select v-model="selectedTheoDoiMuonSach.HinhThucNhanSach" id="HinhThucNhanSach"
                        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                        <option value="Tại thư viện">Tại thư viện</option>
                        <option value="Qua bưu điện">Qua bưu điện</option>
                    </select>
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