<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

// Khai báo các biến reactive để lưu trữ giá trị của các trường đầu vào
const TenSach = ref('');
const DonGia = ref('');
const SoQuyen = ref('');
const NamXuatBan = ref('');
const MaNXB = ref('');
const NguonGoc = ref('');
const TheLoai = ref('');
const HinhAnh = ref(null);

// Hàm xử lý khi người dùng chọn tệp hình ảnh
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        HinhAnh.value = file;
    }
};

// Hàm xử lý khi người dùng submit form
const submitForm = async () => {
    // Tạo đối tượng FormData để gửi dữ liệu
    const formData = new FormData();
    formData.append('TenSach', TenSach.value);
    formData.append('DonGia', DonGia.value);
    formData.append('SoQuyen', SoQuyen.value);
    formData.append('NamXuatBan', NamXuatBan.value);
    formData.append('MaNXB', MaNXB.value);
    formData.append('NguonGoc', NguonGoc.value);
    formData.append('TheLoai', TheLoai.value);
    formData.append('HinhAnh', HinhAnh.value);

    // Tạo giá trị ngẫu nhiên cho MaSach
    const MaSach = 'MS' + Math.random().toString(36).substr(2, 9).toUpperCase();
    formData.append('MaSach', MaSach);

    console.log(formData); // In ra dữ liệu đã được gửi 

    try {
        // Gửi yêu cầu POST tới server để lưu trữ dữ liệu
        const response = await fetch('http://localhost:3000/api/sach', {
            method: 'POST',
            body: formData,
        });
        const data = await response.json();
        console.log('Dữ liệu đã được submit:', data); // In ra dữ liệu đã được submit

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
                    <!-- Form để thêm sản phẩm mới -->
                    <form @submit.prevent="submitForm" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Thêm sản phẩm</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="TenSach" class="font-semibold text-[16px]">Tên sách</label>
                            <input v-model="TenSach" type="text" name="TenSach" id="TenSach"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên sản phẩm" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="DonGia" class="font-semibold text-[16px]">Đơn giá</label>
                            <input v-model="DonGia" type="text" name="DonGia" id="DonGia"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="20.xxx" />
                        </div>
                        <div class="md:col-span-5">
                            <label for="SoQuyen" class="font-semibold text-[16px]">Số lượng</label>
                            <input v-model="SoQuyen" type="number" name="SoQuyen" id="SoQuyen"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Nhập số lượng" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="NamXuatBan" class="font-semibold text-[16px]">Năm xuất bản</label>
                            <input v-model="NamXuatBan" type="text" name="NamXuatBan" id="NamXuatBan"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="20xx" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="MaNXB" class="font-semibold text-[16px]">Mã nhà xuất bản</label>
                            <input v-model="MaNXB" type="text" name="MaNXB" id="MaNXB"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="NXB001" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="NguonGoc" class="font-semibold text-[16px]">Nguồn gốc </label>
                            <input v-model="NguonGoc" type="text" name="NguonGoc" id="NguonGoc"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên tác giả" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="TheLoai" class="font-semibold text-[16px]">Loại sản phẩm</label>
                            <input v-model="TheLoai" type="text" name="TheLoai" id="TheLoai"
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Thể loại sách" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="HinhAnh" class="font-semibold text-[16px]">Chọn hình ảnh: </label>
                            <input @change="handleFileChange" type="file" name="HinhAnh" id="HinhAnh"
                                class="font-bold mt-2" placeholder="Nhập số lượng" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Thêm mới sản phẩm
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