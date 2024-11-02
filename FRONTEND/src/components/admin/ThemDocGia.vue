<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

// Khai báo các biến reactive để lưu trữ giá trị của các trường đầu vào
const HoLot = ref('');
const Ten = ref('');
const NgaySinh = ref('');
const Phai = ref('');
const DiaChi = ref('');
const DienThoai = ref('');

// Hàm xử lý khi người dùng submit form
const submitForm = async () => {
    // Tạo giá trị ngẫu nhiên và duy nhất cho MaDocGia
    const MaDocGia = 'DG' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Tạo đối tượng để gửi dữ liệu
    const data = {
        MaDocGia: MaDocGia,
        HoLot: HoLot.value,
        Ten: Ten.value,
        NgaySinh: NgaySinh.value,
        Phai: Phai.value,
        DiaChi: DiaChi.value,
        DienThoai: DienThoai.value
    };

    console.log('Data:', data); // In ra dữ liệu đã được gửi 

    try {
        // Gửi yêu cầu POST tới server để lưu trữ dữ liệu
        const response = await fetch('http://localhost:3000/api/docgia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const responseData = await response.json();
        console.log('Dữ liệu đã được submit:', responseData); // In ra dữ liệu đã được submit

    } catch (error) {
        console.error('Error:', error);
    }
};
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="ml-[320px] h-full w-full"> <!--?-->
            <div class="w-full py-[25px] px-10 border-2">
                <div class="text-4xl font-bold text-[#a0522d] text-center drop-shadow-md"> THÊM SÁCH MỚI
                </div>
            </div>

            <div class="flex-1 bg-gray-100 p-6">
                <div class="mb-8">
                    <!-- Form để thêm sản phẩm mới -->
                    <form @submit.prevent="submitForm" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Thêm độc giả</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="HoLot" class="font-semibold text-[16px]">Họ lót</label>
                            <input v-model="HoLot" type="text" name="HoLot" id="HoLot"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Họ lót" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="Ten" class="font-semibold text-[16px]">Tên</label>
                            <input v-model="Ten" type="text" name="Ten" id="Ten"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="NgaySinh" class="font-semibold text-[16px]">Ngày sinh</label>
                            <input v-model="NgaySinh" type="date" name="NgaySinh" id="NgaySinh"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ngày sinh" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="Phai" class="font-semibold text-[16px]">Phái</label>
                            <input v-model="Phai" type="text" name="Phai" id="Phai"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Phái" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="DiaChi" class="font-semibold text-[16px]">Địa chỉ</label>
                            <input v-model="DiaChi" type="text" name="DiaChi" id="DiaChi"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Địa chỉ" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="DienThoai" class="font-semibold text-[16px]">Điện thoại</label>
                            <input v-model="DienThoai" type="text" name="DienThoai" id="DienThoai"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Điện thoại" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm mới độc giả
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
/* Add your styles here */
</style>