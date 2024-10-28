<script setup>
import { onMounted } from 'vue';
const sidebarListItem = [
    {
        title: "Danh sách sản phẩm",
        icon: "fa-brands fa-product-hunt",
        path: "adminDashboard"
    },
    {
        title: "Danh sách người dùng",
        icon: "fa-solid fa-users",
        path: "adminUsers"
    },
    {
        title: "Thêm sản phẩm mới",
        icon: "fa-solid fa-circle-plus",
        path: "addProduct"
    },
    {
        title: "Thêm admin",
        icon: "fa-solid fa-user-plus",
        path: "addAdmin"
    },
    {
        title: "Danh sách đặt hàng",
        icon: "fa-solid fa-cart-shopping",
        path: "adminOrdersList"
    },
    {
        title: "Đăng xuất",
        icon: "fa-solid fa-right-from-bracket",
        path: ""
    },
]

onMounted(() => {
    const openSidebar = $(".openSidebar");
    const closeSidebar = $(".closeSidebar");
    const sidebarMobile = $(".sidebarMobile");

    openSidebar.on("click", () => {
        sidebarMobile.animate({ right: 0 }, 400);
    });

    closeSidebar.on("click", () => {
        sidebarMobile.animate({ right: "-100%" }, 400);
    })

})
</script>

<template>
    <header class="px-8 py-4 bg-white shadow flex items-center justify-between">
        <h2 class="text-xl font-bold hidden lg:block">Danh sách sản phẩm</h2>
        <div class="flex flex-col gap-2 items-start lg:items-end">
            <p class="text-[16px] lg:text-[20px] font-semibold">Tô Văn Hưởng</p>
            <p class="text-[14px] lg:text-[16px] font-medium text-[#A0522D]">vanhuong@gmail.com</p>
        </div>
        <button class="openSidebar lg:hidden block">
            <i class="fa-solid fa-bars text-[28px] text-[#A0522D]"></i>
        </button>
        <div class="sidebarMobile fixed top-0 -right-[100%] bg-white text-white p-4 w-full h-full z-40">
            <div class="flex justify-between items-center p-2">
                <h1 class="font-bold text-xl uppercase text-[#A0522D]"><i class="fa-solid fa-book-open"></i> -
                    Paul-To-Book</h1>
                <button class="closeSidebar">
                    <i class="fa-solid fa-x text-[#A0522D] text-2xl ease-out duration-[0.4s] hover:scale-[1.1]"></i>
                </button>
            </div>
            <ul class="flex flex-col my-10">
                <li class="py-[15px] flex gap-3 text-[#333f48] group cursor-pointer"
                    v-for="(item, index) in sidebarListItem" :key="index">
                    <i :class="item.icon" class="text-lg font-semibold group-hover:text-[#A0522D]"></i>
                    <router-link :to="item.path"
                        class="border-b-2 border-transparent hover:border-b-2 group-hover:border-[#A0522D] font-semibold text-[20px] group-hover:text-[#A0522D] transition-colors duration-300">{{
                            item.title }}</router-link>
                </li>
            </ul>
        </div>
    </header>
</template>

<style></style>