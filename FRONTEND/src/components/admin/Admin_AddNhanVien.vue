<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

// Khai báo các biến reactive để lưu trữ giá trị của các trường đầu vào
const HoTenNV = ref('');
const ChucVu = ref('');
const DiaChi = ref('');
const DienThoai = ref('');
const MatKhau = ref('');

// Hàm xử lý khi người dùng submit form
const submitForm = async () => {
    // Tạo giá trị ngẫu nhiên và duy nhất cho MSNV
    const MSNV = 'NV' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Tạo đối tượng để gửi dữ liệu
    const data = {
        MSNV: MSNV,
        HoTenNV: HoTenNV.value,
        ChucVu: ChucVu.value,
        DiaChi: DiaChi.value,
        DienThoai: DienThoai.value,
        MatKhau: MatKhau.value
    };

    console.log('Data:', data); // In ra dữ liệu đã được gửi 

    try {
        // Gửi yêu cầu POST tới server để lưu trữ dữ liệu
        const response = await fetch('http://localhost:3000/api/nhanvien', {
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
        <div class="flex-1 flex flex-col overflow-auto">
            <navbarAdmin />
            <div class="flex-1 bg-gray-100 p-6">
                <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                    <!-- Form để thêm nhân viên mới -->
                    <form @submit.prevent="submitForm" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Thêm nhân viên</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="HoTenNV" class="font-semibold text-[16px]">Họ tên nhân viên</label>
                            <input v-model="HoTenNV" type="text" name="HoTenNV" id="HoTenNV"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Họ tên nhân viên" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="ChucVu" class="font-semibold text-[16px]">Chức vụ</label>
                            <input v-model="ChucVu" type="text" name="ChucVu" id="ChucVu"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Chức vụ" />
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

                        <div class="md:col-span-5">
                            <label for="MatKhau" class="font-semibold text-[16px]">Mật khẩu</label>
                            <input v-model="MatKhau" type="password" name="MatKhau" id="MatKhau"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Mật khẩu" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm mới nhân viên
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