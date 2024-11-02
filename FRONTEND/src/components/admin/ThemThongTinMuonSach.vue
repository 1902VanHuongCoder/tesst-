<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

// Khai báo các biến reactive để lưu trữ giá trị của các trường đầu vào
const MaSach = ref('');
const NgayMuon = ref('');
const NgayTra = ref('');

// Hàm xử lý khi người dùng submit form
const submitForm = async () => {
    // Tạo giá trị ngẫu nhiên và duy nhất cho MaDocGia
    const MaDocGia = 'DG' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Tạo đối tượng để gửi dữ liệu
    const data = {
        MaDocGia: MaDocGia,
        MaSach: MaSach.value,
        NgayMuon: NgayMuon.value,
        NgayTra: NgayTra.value
    };

    console.log('Data:', data); // In ra dữ liệu đã được gửi 

    try {
        // Gửi yêu cầu POST tới server để lưu trữ dữ liệu
        const response = await fetch('http://localhost:3000/api/theodoimuonsach', {
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
                <div class="text-4xl font-bold text-[#a0522d] text-center drop-shadow-md"> THÊM THÔNG TIN MƯỢN SÁCH
                </div>
            </div>

            <div class="flex-1 p-6">
                <div class="mb-8">
                    <!-- Form để thêm sản phẩm mới -->
                    <form @submit.prevent="submitForm" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">

                        <div class="md:col-span-5">
                            <label for="MaSach" class="font-semibold text-[16px]">Mã sách</label>
                            <input v-model="MaSach" type="text" name="MaSach" id="MaSach"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Mã sách" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="NgayMuon" class="font-semibold text-[16px]">Ngày mượn</label>
                            <input v-model="NgayMuon" type="date" name="NgayMuon" id="NgayMuon"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ngày mượn" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="NgayTra" class="font-semibold text-[16px]">Ngày trả</label>
                            <input v-model="NgayTra" type="date" name="NgayTra" id="NgayTra"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Ngày trả" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm thông tin mượn sách
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