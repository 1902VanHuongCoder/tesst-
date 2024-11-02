<template>
    <div class="flex justify-center items-center min-h-screen bg-[#D19A6A] p-4">
        <div class="w-full max-w-4xl flex justify-center items-center">
            <div class="w-[400px] sm:w-[500px] bg-white shadow-xl rounded-md overflow-hidden ">
                <div class="">
                    <div class="w-full p-8 md:p-12">
                        <h1 class="text-3xl font-bold text-center text-[#A0522D] mb-2">Admin Đăng Nhập</h1>
                        <p class="text-lg font-medium text-center text-gray-700 mb-8">
                            Vui lòng nhập thông tin để đăng nhập!
                        </p>
                        <!-- Login form -->
                        <form @submit.prevent="handleLogin" class="space-y-6">
                            <div>
                                <label for="MaQuanTriVien" class="text-sm font-medium text-gray-800 block mb-2">Mã Quản
                                    Trị Viên</label>
                                <!-- Input for MaQuanTriVien -->
                                <input type="text" id="MaQuanTriVien" v-model="form.MaQuanTriVien"
                                    autocomplete="username"
                                    class="w-full px-4 py-3 rounded-lg outline-none border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="Mã Quản Trị Viên" required>
                            </div>
                            <div>
                                <label for="MatKhau" class="text-sm font-medium text-gray-800 block mb-2">Mật
                                    Khẩu</label>
                                <!-- Input for MatKhau -->
                                <input type="password" id="MatKhau" v-model="form.MatKhau"
                                    autocomplete="current-password"
                                    class="w-full px-4 py-3 outline-none rounded-lg border-2 border-gray-300 focus:border-[#A0522D] focus:ring-[#A0522D] transition duration-150 ease-in-out"
                                    placeholder="••••••••" required>
                            </div>
                            <!-- Submit button -->
                            <button type="submit"
                                class="w-full bg-[#A0522D] text-white rounded-lg py-3 px-4 font-semibold hover:bg-[#8B4513] transition duration-300 ease-in-out transform hover:scale-105">
                                Đăng Nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                MaQuanTriVien: '',
                MatKhau: ''
            }
        };
    },
    methods: {
        async handleLogin() {
            try {
                // Log the form data for debugging
                console.log('Form Data:', this.form);

                // Send a POST request to the backend to authenticate the admin
                const response = await fetch('http://localhost:3000/api/quantrivien/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.form)
                });

                // Handle the response from the backend
                if (response.ok) {
                    const data = await response.json();
                    alert('Đăng nhập thành công!');
                    console.log('Response Data:', data);
                    localStorage.setItem('chucVu', "admin");
                    // Redirect to the admin management page
                    this.$router.push('/quantrivien/tongquan');
                } else {
                    const errorData = await response.json();
                    alert(`Đăng nhập thất bại: ${errorData.message}`);
                    console.log('Error Data:', errorData);
                }
            } catch (error) {
                // Handle any errors that occur during the request
                alert(`Có lỗi xảy ra: ${error.message}`);
                console.error('Error:', error);
            }
        }
    }
};
</script>

<style>
/* Your style code here */
</style>