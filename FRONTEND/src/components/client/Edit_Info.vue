<script setup>
import Header from "../../layouts/client/Header.vue";
import Footer from "../../layouts/client/Footer.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div class="flex-grow lg:py-10 lg:px-24 p-4 bg-[#f9fafa]">
            <div class="container max-w-screen-lg mx-auto">
                <h1 class="text-lg lg:text-[30px] font-bold text-center uppercase mb-8 text-[#333]">
                    Chỉnh Sửa Thông Tin Cá Nhân
                </h1>
                <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                    <form action="/updateprofile" method="post" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-2xl">Thông Tin Cá Nhân</p>
                            <p>Vui lòng điền các thông tin cần thiết để cập nhật hồ sơ của bạn.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="name" class="font-semibold text-[16px]">Họ và Tên</label>
                            <input type="text" name="name" id="name" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="To Van Huong" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="email" class="font-semibold text-[16px]">Địa chỉ Email</label>
                            <input type="email" name="email" id="email" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="tovanhuong@gmail.com" />
                        </div>
                        <div class="md:col-span-5">
                            <label for="phone" class="font-semibold text-[16px]">Số điện thoại</label>
                            <input type="text" name="phone" id="phone" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="075-xxx-xxxx" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="address" class="font-semibold text-[16px]">Địa chỉ</label>
                            <input type="text" name="address" id="address" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="My Tu - Soc Trang" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Cập nhật thông tin
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>
