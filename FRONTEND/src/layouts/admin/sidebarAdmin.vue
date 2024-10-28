<script setup>
const sidebarListItem = [
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
        path: ""
    },

]
</script>
<template>
    <div class="w-80 bg-[#333] text-white flex-shrink-0 hidden lg:block">
        <div class="px-8 py-8 bg-[#A0522D]">
            <h1 class="font-bold text-xl uppercase text-white"><i class="fa-solid fa-book-open"></i> - Paul-To-Book</h1>
        </div>
        <ul class="flex flex-col space-y-5 pt-8 px-4">
            <router-link v-for="(item, index) in sidebarListItem" :key="index" :to="item.path"
                class="flex items-center space-x-3 hover:bg-white rounded-2xl p-4 cursor-pointer group transition-all duration-300">
                <i :class="item.icon" class="text-lg font-semibold group-hover:text-[#A0522D]"></i>
                <a href="" class="text-lg font-semibold group-hover:text-[#A0522D]">{{ item.title }}</a>
            </router-link>
        </ul>
    </div>
</template>



<style></style>