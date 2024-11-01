<template>
    <div class="flex justify-center items-center min-h-screen bg-[#D19A6A] p-4">
        <div class="w-full max-w-4xl">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="flex flex-col md:flex-row">
                    <div class="w-full md:w-1/2 p-8 md:p-12">
                        <h1 class="text-3xl font-bold text-center text-[#A0522D] mb-2">Đăng Ký Admin</h1>
                        <p class="text-lg font-medium text-center text-gray-700 mb-8">
                            Vui lòng nhập thông tin để đăng ký!
                        </p>
                        <form @submit.prevent="handleSignUp" class="space-y-6">
                            <div>
                                <label for="MaQuanTriVien" class="text-sm font-medium text-gray-800 block mb-2">Mã Quản
                                    Trị Viên</label>
                                <input type="text" id="MaQuanTriVien" v-model="form.MaQuanTriVien"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="Mã Quản Trị Viên" required>
                            </div>
                            <div>
                                <label for="MatKhau" class="text-sm font-medium text-gray-800 block mb-2">Mật
                                    Khẩu</label>
                                <input type="password" id="MatKhau" v-model="form.MatKhau"
                                    class="w-full px-4 py-3 outline-none rounded-lg border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="••••••••" required>
                            </div>
                            <div>
                                <label for="ConfirmPassword" class="text-sm font-medium text-gray-800 block mb-2">Xác
                                    Nhận Mật Khẩu</label>
                                <input type="password" id="ConfirmPassword" v-model="form.ConfirmPassword"
                                    class="w-full px-4 py-3 outline-none rounded-lg border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="••••••••" required>
                            </div>
                            <button type="submit"
                                class="w-full bg-[#A0522D] text-white rounded-lg py-3 px-4 font-semibold hover:bg-[#8B4513] transition duration-300 ease-in-out transform hover:scale-105">
                                Đăng Ký
                            </button>
                        </form>
                        <p class="mt-8 text-center text-sm text-gray-700">
                            Nếu bạn đã có tài khoản?
                            <a href="#"
                                class="font-medium text-[#A0522D] hover:text-[#8B4513] transition duration-150 ease-in-out">Đăng
                                Nhập</a>
                        </p>
                    </div>
                    <div class="hidden w-1/2 bg-[#A0522D] p-12 md:flex flex-col items-center justify-center text-white">
                        <h2 class="text-2xl font-bold mb-4">Chào Mừng Đến Với Paul To!</h2>
                        <p class="text-center mb-2">Chúng tôi cung cấp nhiều sách hay và dịch vụ tốt nhất cho bạn.</p>
                        <p class="text-center">Hãy đăng ký để khám phá thế giới sách phong phú của chúng tôi!</p>
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
                MaQuanTriVien: '',
                MatKhau: '',
                ConfirmPassword: ''
            }
        };
    },
    methods: {
        async handleSignUp() {


            if (this.form.MatKhau !== this.form.ConfirmPassword) {
                alert('Mật khẩu và xác nhận mật khẩu không khớp!');
                return;
            }

            try {
                const hashedPassword = await bcrypt.hash(this.form.MatKhau, 10);

                const response = await fetch('http://localhost:3000/api/quantrivien/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        MaQuanTriVien: this.form.MaQuanTriVien,
                        MatKhau: hashedPassword
                    })
                });

                console.log(hashedPassword);

                if (response.ok) {
                    const data = await response.json();
                    alert('Đăng ký thành công!');
                    this.$router.push('/quantrivien/quanly');
                } else {
                    const errorData = await response.json();
                    alert(`Đăng ký thất bại: ${errorData.message}`);
                }
            } catch (error) {
                alert(`Có lỗi xảy ra: ${error.message}`);
            }
        }
    }
};
</script>

<style>
/* Your style code here */
</style>