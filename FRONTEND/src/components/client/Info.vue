<script setup>
import Header from "../../layouts/client/Header.vue";
import Footer from "../../layouts/client/Footer.vue";
</script>

<template>
    <div class="flex flex-col relative overflow-hidden min-h-screen bg-gray-50 font-sans">
        <Header />
        <div class="flex-1 container mx-auto p-6">
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <div class="h-52 bg-gradient-to-r from-pink-500 to-orange-400"></div>
                <div class="p-6 relative">
                    <div class="absolute -top-16 left-1/2 transform -translate-x-1/2">
                        <img src="../../assets/img/review_1.png" alt="Avatar"
                            class="w-32 h-32 rounded-full border-4 border-white shadow-lg">
                    </div>
                    <div class="mt-20 flex flex-col justify-center items-center gap-2">
                        <h2 class="text-3xl font-bold text-gray-800">Tô Văn Hưởng</h2>
                        <p class="text-gray-500"><i class="fa-regular fa-envelope"></i> tovanhuong2003@gmail.com</p>
                        <div class="flex justify-center flex-col lg:flex-row gap-4 space-x-4 mt-4 text-[#A0522D] font-semibold">
                            <span><i class="fa-solid fa-location-dot"></i> Việt Nam - Hậu Giang</span>
                            <span><i class="fa-solid fa-phone"></i> 079-965-8592</span>
                        </div>
                        <p class="mt-6 text-gray-700 text-[14px] lg:text-[18px] text-center lg:text-left">
                            Chào mừng <span class="font-bold uppercase">Văn Hưởng</span> đã đến với Paul-To-Book.
                            Chúng tôi luôn sẵn
                            sàng hỗ trợ bạn. Xin cám ơn!!
                        </p>
                        <div class="mt-6 p-4 rounded-lg text-center">
                            <div class="flex gap-10 justify-around">
                                <div>
                                    <h3 class="text-xl font-semibold text-[#A0522D]">2</h3>
                                    <p class="text-gray-500">Số đơn hàng</p>
                                </div>
                                <div>
                                    <h3 class="text-xl font-semibold text-[#A0522D]">102</h3>
                                    <p class="text-gray-500">Số giờ sử dụng</p>
                                </div>
                            </div>
                        </div>
                        <a href="/editprofile"
                            class="mt-6 inline-block bg-[#A0522D] hover:bg-[#8B4513] font-semibold text-white px-4 py-2 rounded-lg shadow transition duration-300 ease-in-out transform hover:scale-105">
                            Chỉnh sửa hồ sơ
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style scoped></style>
