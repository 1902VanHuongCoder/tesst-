<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const openMenu = $(".open_menu");
    const closeMenu = $(".close_menu");
    const sidebar = $(".sidebar_menu");
    const user_info = $(".user");
    const infomation = $(".info");
    let isOpen = false;

    openMenu.on("click", function () {
        sidebar.animate({ right: "0" }, 400);
    });

    closeMenu.on("click", function () {
        sidebar.animate({ right: "-100%" }, 400);
    });

    user_info.on("click", function () {
        infomation.animate({ right: isOpen ? "50" : "-100%" }, 400);
        isOpen = !isOpen;
    });
});
</script>

<template>
    <header>
        <div class="relative flex items-center justify-between lg:py-4 lg:px-10 p-4">
            <div class="px-4">
                <h1 class="font-bold lg:text-2xl text-[14px] uppercase text-[#A0522D]">
                    Paul-To-Book
                </h1>
            </div>
            <ul class="lg:flex hidden">
                <li class="px-[15px] text-[20px] group">
                    <router-link to="/login" class="font-bold group-hover:text-[#A0522D] transition-all duration-300">Đăng
                        nhập</router-link>
                </li>
                <li class="px-[15px] text-[20px] group">
                    <router-link to="/" class="font-bold group-hover:text-[#A0522D] transition-all duration-300">Trang
                        chủ</router-link>
                </li>
                <li class="px-[15px] text-[20px] group">
                    <router-link to="/Book_history" class="font-bold group-hover:text-[#A0522D] transition-all duration-300">Lịch sử
                        mượn
                        sách</router-link>
                </li>
            </ul>
            <div class="lg:flex hidden flex-1 gap-4 max-w-xl">
                <input type="text"
                    class="items-center w-full p-4 border border-gray-400 text-base font-semibold tracking-wider text-black bg-white/10 rounded-lg focus:outline-none"
                    placeholder="Tìm kiếm sách bạn yêu thích ..." />
                <button class="font-bold text-lg bg-[#A0522D] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                    Tìm kiếm
                </button>
            </div>
            <div class="flex items-center lg:space-x-8 space-x-5 px-4">
                <div class="user flex space-x-4 items-center justify-center cursor-pointer">
                    <img src="../../assets/img/review_1.png"
                        class="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-full border-2 border-[#C0C0C0]"
                        alt="" />
                </div>
                <div>
                    <div class="relative">
                        <div
                            class="absolute top-[-12px] right-[-10px] flex justify-center items-center w-6 h-6 bg-[#A0522D] rounded-full">
                            <span class="text-white font-bold text-base">1</span>
                        </div>
                        <button>
                            <i class="fa-solid fa-cart-shopping text-[26px]"></i>
                        </button>
                    </div>
                </div>
                <button class="open_menu lg:hidden block">
                    <i class="fa-solid fa-bars text-[26px] text-[#A0522D]"></i>
                </button>
            </div>
            <div class="sidebar_menu fixed top-0 -right-[100%] bg-[#fff] p-4 w-full h-full z-40">
                <div class="flex justify-between items-center p-2">
                    <h1 class="font-bold text-xl uppercase text-[#A0522D]">
                        Paul-To-Book
                    </h1>
                    <button class="close_menu">
                        <i class="fa-solid fa-x text-2xl text-[#A0522D] ease-out duration-[0.4s] hover:scale-[1.1]"></i>
                    </button>
                </div>
                <ul class="flex flex-col my-10">
                    <form action="" method="post" class="relative mb-4 flex space-x-4">
                        <input type="text"
                            class="items-center w-full p-4 border border-gray-400 text-base font-semibold tracking-wider text-black bg-white/10 rounded-lg focus:outline-none"
                            placeholder="Tìm kiếm sách bạn yêu thích ..." />
                        <button
                            class="font-bold text-lg bg-[#A0522D] text-white px-4 py-2 rounded-lg whitespace-nowrap">
                            Tìm kiếm
                        </button>
                    </form>
                    <li class="py-[15px]">
                        <router-link to=""
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">Đăng
                            nhập</router-link>
                    </li>
                    <li class="py-[15px]">
                        <router-link to=""
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">Trang
                            chủ</router-link>
                    </li>
                    <li class="py-[15px]">
                        <router-link to=""
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">Lịch
                            sử mượn sách</router-link>
                    </li>
                </ul>
            </div>
            <div
                class="info absolute top-24 right-[-100%] flex flex-col gap-3 p-6 border-2 border-[#C0C0C0] rounded-2xl bg-[#fff] shadow-md z-10">
                <div class="mb-4 flex justify-center">
                    <img src="../../assets/img/review_1.png" class="w-24 h-24 rounded-full border-[3px] border-[#A0522D]" alt="Avatar" />
                </div>
                <div class="user-info text-center">
                    <p class="text-2xl font-bold text-gray-800">Tô Văn Hưởng</p>
                    <p class="text-sm text-[#A0522D]">tovanhuong@gmail.com</p>
                </div>
                <hr class="my-4 bg-[#A0522D] h-0.5 w-full" />
                <div class="menu flex flex-col w-full">
                    <a href="#"
                        class="menu-item flex items-center p-3 hover:bg-[#A0522D] transition-all duration-300 rounded-md group">
                        <i class="fa-solid fa-user text-gray-800 group-hover:text-white"></i>
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Hồ Sơ</span>
                    </a>
                    <a href="#"
                        class="menu-item flex items-center p-3 hover:bg-[#A0522D] transition-all duration-300 rounded-md group">
                        <i class="fa-solid fa-gear text-gray-800 group-hover:text-white"></i>
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Chỉnh sửa hồ sơ</span>
                    </a>
                    <a href="#"
                        class="menu-item flex items-center p-3 hover:bg-[#A0522D] transition-all duration-300 rounded-md group">
                        <i class="fa-solid fa-right-to-bracket text-gray-800 group-hover:text-white"></i>
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Đăng xuất</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<style></style>