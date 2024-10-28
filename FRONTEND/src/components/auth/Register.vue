<template>
    <div class="flex justify-center items-center min-h-screen bg-[#D19A6A] p-4">
        <div class="w-full max-w-4xl">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <div class="hidden md:flex w-1/2 bg-[#A0522D] p-12 flex-col items-center justify-center text-white">
                        <h2 class="text-2xl font-bold mb-4">Chào Mừng Đến Với Paul To!</h2>
                        <p class="text-center mb-2">Hãy gia nhập cộng đồng yêu sách của chúng tôi.</p>
                        <p class="text-center">Tạo tài khoản để khám phá nhiều sách hay và ưu đãi hấp dẫn!</p>
                    </div>
                    <div class="w-full md:w-1/2 p-8 md:p-12">
                        <h1 class="text-3xl font-bold text-center text-[#A0522D] mb-2">Đăng Ký</h1>
                        <p class="text-lg font-medium text-center text-gray-700 mb-8">
                            Vui lòng điền thông tin để tạo tài khoản!
                        </p>
                        <form @submit.prevent="validateForm" class="space-y-6">
                            <div>
                                <label for="Ten" class="text-sm font-medium text-gray-800 block mb-2">Tên</label>
                                <input type="text" id="Ten" v-model="form.Ten" autocomplete="given-name"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="Tên của bạn">
                            </div>
                            <div>
                                <label for="HoLot" class="text-sm font-medium text-gray-800 block mb-2">Họ</label>
                                <input type="text" id="HoLot" v-model="form.HoLot" autocomplete="family-name"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="Họ của bạn">
                            </div>
                            <div>
                                <label for="NgaySinh" class="text-sm font-medium text-gray-800 block mb-2">Ngày
                                    sinh</label>
                                <input type="date" id="NgaySinh" v-model="form.NgaySinh" autocomplete="bday"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="01/01/1973">
                            </div>
                            <div>
                                <label for="Phai" class="text-sm font-medium text-gray-800 block mb-2">Giới
                                    tính</label>
                                <select id="Phai" v-model="form.Phai" autocomplete="sex"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out">
                                    <option value="" disabled selected>Chọn giới tính</option>
                                    <option value="male">Nam</option>
                                    <option value="female">Nữ</option>
                                    <option value="other">Khác</option>
                                </select>
                            </div>
                            <div>
                                <label for="MatKhau" class="text-sm font-medium text-gray-800 block mb-2">Mật
                                    Khẩu</label>
                                <input autocomplete="new-password" type="password" id="MatKhau" v-model="form.MatKhau"
                                    class="w-full px-4 py-3 outline-none rounded-lg border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="••••••••">
                            </div>
                            <div>
                                <label for="DiaChi" class="text-sm font-medium text-gray-800 block mb-2">Địa
                                    Chỉ</label>
                                <input type="text" id="DiaChi" v-model="form.DiaChi" autocomplete="street-address"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="Mỹ tú - Sóc trăng">
                            </div>
                            <div>
                                <label for="DienThoai" class="text-sm font-medium text-gray-800 block mb-2">Số Điện
                                    Thoại</label>
                                <input type="tel" id="DienThoai" v-model="form.DienThoai" autocomplete="tel"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="0123456789" required>
                                <small class="text-red-500" v-if="errors.DienThoai">{{ errors.DienThoai }}</small>
                            </div>
                            <button type="submit"
                                class="w-full bg-[#A0522D] text-white rounded-lg py-3 px-4 font-semibold hover:bg-[#8B4513] transition duration-300 ease-in-out transform hover:scale-105">
                                Đăng Ký
                            </button>
                        </form>
                        <p class="mt-8 text-center text-sm text-gray-700">
                            Đã có tài khoản?
                            <a href="/login"
                                class="font-medium text-[#A0522D] hover:text-[#8B4513] transition duration-150 ease-in-out">Đăng
                                Nhập</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import bcrypt from 'bcryptjs';

export default {
    data() {
        return {
            form: {
                MaDocGia: '',
                Ten: '',
                HoLot: '',
                NgaySinh: '',
                Phai: '',
                MatKhau: '',
                DiaChi: '',
                DienThoai: ''
            },
            errors: {}
        };
    },
    methods: {
        generateMaDocGia() {
            // Generate a random string of 10 characters as MaDocGia
            return Math.random().toString(36).substring(2, 12).toUpperCase();
        },
        validateForm() {
            this.errors = {};

            const DienThoaiPattern = /^[0-9]{10}$/;
            if (!DienThoaiPattern.test(this.form.DienThoai)) {
                this.errors.DienThoai = 'Số điện thoại không hợp lệ. Vui lòng nhập 10 chữ số.';
            }

            if (Object.keys(this.errors).length === 0) {
                // Gửi form nếu không có lỗi
                this.submitForm();
            }
        },
        async submitForm() {
            try {
                // Hash the password before sending it to the backend
                const hashedPassword = await bcrypt.hash(this.form.MatKhau, 10);
                this.form.MatKhau = hashedPassword;

                const response = await fetch('http://localhost:3000/api/docgia', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                if (response.ok) {
                    alert('Form đã được gửi thành công!');
                    this.$router.push('/login');
                } else {
                    const errorData = await response.json();
                    alert(`Có lỗi xảy ra: ${errorData.message}`);
                }
            } catch (error) {
                alert(`Có lỗi xảy ra: ${error.message}`);
            }
        }
    },
    created() {
        // Generate MaDocGia when the component is created
        this.form.MaDocGia = this.generateMaDocGia();
    }
};
</script>

<style>
/* Thêm các kiểu CSS tùy chỉnh nếu cần */
</style>