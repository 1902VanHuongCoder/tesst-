<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const duLieuThongKe = ref({});

const navigate = (route) => {
    router.push(route);
};

const napDuLieuThongKe = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/thongke', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        duLieuThongKe.value = await response.json();
    } catch (error) {
        console.error('Error fetching statistics:', error);
    }
};

onMounted(napDuLieuThongKe);

const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number;
};

const formattedDocGiaCount = computed(() => formatNumber(duLieuThongKe.value.docGiaCount));
const formattedNhanVienCount = computed(() => formatNumber(duLieuThongKe.value.nhanVienCount));
const formattedNhaXuatBanCount = computed(() => formatNumber(duLieuThongKe.value.nhaXuatBanCount));
const formattedQuanTriVienCount = computed(() => formatNumber(duLieuThongKe.value.quanTriVienCount));
const formattedSachCount = computed(() => formatNumber(duLieuThongKe.value.sachCount));
const formattedTheoDoiMuonSachCount = computed(() => formatNumber(duLieuThongKe.value.theoDoiMuonSachCount));
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full">
            <div class="w-full py-[25px] px-10 border-b-2 bg-[#a0522d] shadow-lg">
                <div class="text-4xl font-bold  text-center text-white drop-shadow-xl">THÔNG TIN TỔNG
                    QUAN THƯ VIỆN
                </div>
            </div>
            <div class="p-6 mb-8 grid grid-cols-4 gap-x-5 gap-y-5">
                <div @click="() => navigate('/quantrivien/quanlydocgia')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedDocGiaCount }}</span>
                        </div>
                        <p class="text-xl font-normal">ĐỌC GIẢ</p>
                    </div>
                </div>
                <div @click="() => navigate('/quantrivien/quanlynhanvien')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedNhanVienCount }}</span>
                        </div>
                        <p class="text-xl font-normal">NHÂN VIÊN</p>
                    </div>

                </div>
                <div @click="() => navigate('/quantrivien/quanlynhaxuatban')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedNhaXuatBanCount }}</span>
                        </div>
                        <p class="text-xl font-normal">NHÀ XUẤT BẢN</p>
                    </div>

                </div>
                <div @click="() => navigate('/quantrivien/quanlyquantrivien')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedQuanTriVienCount }}</span>
                        </div>
                        <p class="text-xl font-normal">QUẢN TRỊ VIÊN</p>
                    </div>

                </div>
                <div @click="() => navigate('/quantrivien/quanlysach')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedSachCount }}</span>
                        </div>
                        <p class="text-xl font-normal">SÁCH</p>
                    </div>

                </div>
                <div @click="() => navigate('/quantrivien/quanlymuonsach')"
                    class="p-6 border-[2px] border-dashed border-[#a0522d] bg-slate-50 hover:shadow-2xl transition-all duration-500 cursor-pointer hover:bg-slate-200">
                    <div class="flex flex-col items-center gap-y-5">
                        <div
                            class="text-[40px] bg-[#DE8F5F] w-[150px] h-[150px] flex justify-center items-center text-white rounded-full flex-col shadow-inner border-[4px] border-solid border-[#333333]">
                            <span>{{ formattedTheoDoiMuonSachCount }}</span>
                        </div>
                        <p class="text-xl font-normal">LƯỢT MƯỢN SÁCH</p>
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>