<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

// Khai báo các biến reactive để lưu trữ giá trị của các trường đầu vào
const TenNXB = ref('');
const DiaChi = ref('');

// Hàm xử lý khi người dùng submit form
const submitForm = async () => {
    // Tạo giá trị ngẫu nhiên và duy nhất cho MaNXB
    const MaNXB = 'NXB' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Tạo đối tượng để gửi dữ liệu
    const data = {
        TenNXB: TenNXB.value,
        DiaChi: DiaChi.value,
        MaNXB: MaNXB
    };

    console.log('Data:', data); // In ra dữ liệu đã được gửi 

    try {
        // Gửi yêu cầu POST tới server để lưu trữ dữ liệu
        const response = await fetch('http://localhost:3000/api/nhaxuatban', {
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
                    <!-- Form để thêm nhà xuất bản mới -->
                    <form @submit.prevent="submitForm" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Thêm nhà xuất bản</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="TenNXB" class="font-semibold text-[16px]">Tên nhà xuất bản</label>
                            <input v-model="TenNXB" type="text" name="TenNXB" id="TenNXB"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên nhà xuất bản" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="DiaChi" class="font-semibold text-[16px]">Địa chỉ</label>
                            <input v-model="DiaChi" type="text" name="DiaChi" id="DiaChi"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Địa chỉ" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm mới nhà xuất bản
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