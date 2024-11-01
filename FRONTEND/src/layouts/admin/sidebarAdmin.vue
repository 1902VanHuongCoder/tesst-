<script setup>
const sidebarListItem = [
    {
        title: "Tổng quan",
        icon: "fa-solid fa-book",
        path: "admin_Dashboard"
    },
    {
        title: "Danh sách sản phẩm",
        icon: "fa-brands fa-product-hunt",
        path: "admin_Dashboard"
    },
    {
        title: "Danh sách người dùng",
        icon: "fa-solid fa-users",
        path: "admin_Users"
    },
    {
        title: "Thêm sản phẩm mới",
        icon: "fa-solid fa-circle-plus",
        path: "admin_AddProduct"
    },
    {
        title: "Thêm admin",
        icon: "fa-solid fa-user-plus",
        path: "add_Admin"
    },
    {
        title: "Danh sách đặt hàng",
        icon: "fa-solid fa-cart-shopping",
        path: "admin_OrdersList"
    },
    {
        title: "Đăng xuất",
        icon: "fa-solid fa-right-from-bracket",
        path: "/quantrivien/dangxuat"
    },

]
</script>
<template>
    <div class="w-80 bg-[#333] text-white flex-shrink-0 hidden lg:block">
        <div class="px-8 py-5 bg-[#A0522D]">
            <h1 class="font-bold text-xl uppercase text-white flex justify-center items-center gap-x-3">
                <span
                    class="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.2)] p-3 rounded-full"><i
                        class="fa-solid fa-book-open"></i></span>
                <span class="drop-shadow-lg"> QUẢN LÝ NHÀ SÁCH</span>
            </h1>
        </div>
        <ul class="flex flex-col space-y-5 pt-8 px-4 border-t-2">
            <router-link v-for="(item, index) in sidebarListItem" :key="index" :to="item.path"
                class="group flex items-center gap-x-4 hover:bg-white p-4 cursor-pointer group transition-all duration-300">
                <i :class="item.icon"
                    class="text-lg font-semibold group-hover:text-[#A0522D] opacity-50 group-hover:opacity-100  "></i>
                <a href="" class="text-lg font-semibold group-hover:text-[#A0522D]">{{ item.title }}</a>
            </router-link>
        </ul>
    </div>
</template>



<style></style>