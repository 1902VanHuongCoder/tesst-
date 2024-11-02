<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const sidebarListItem = [
    {
        title: "Tổng quan",
        icon: "fa-solid fa-book",
        path: "/quantrivien/tongquan"
    },
    {
        title: "Sách",
        icon: "fa-solid fa-book",
        path: "/quantrivien/quanlysach"
    },
    {
        title: "Đọc giả",
        icon: "fa-solid fa-users",
        path: "/quantrivien/quanlydocgia"
    },
    {
        title: "Nhân viên",
        icon: "fa-solid fa-user",
        path: "/quantrivien/quanlynhanvien"
    },
    {
        title: "Nhà xuất bản",
        icon: "fa-regular fa-building",
        path: "/quantrivien/quanlynhaxuatban"
    },
    {
        title: "Quản lý mượn trả sách",
        icon: "fa-solid fa-book",
        path: "/quantrivien/theodoimuonsach"
    },
    {
        title: "Thêm quản trị viên",
        icon: "fa-solid fa-user-secret",
        path: "/quantrivien/dangky"
    },
    {
        title: "Đăng xuất",
        icon: "fa-solid fa-right-from-bracket",
        path: "/quantrivien/dangnhap"
    },
];

const chucVu = JSON.parse(localStorage.getItem('chucVu'));

const filteredSidebarListItem = computed(() => {
    if (chucVu === 'admin') {
        return sidebarListItem;
    } else {
        return sidebarListItem.filter((item, index) => index !== 0 && index !== 6);
    }
});
</script>
<template>
    <div class="fixed left-0 top-0 min-h-screen w-80 bg-[#333] text-white flex-shrink-0 hidden lg:block">
        <div class="px-6 py-5 bg-[#A0522D]">
            <h1 class="font-bold text-xl uppercase text-white flex items-center gap-x-4">
                <span
                    class="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.2)] p-3 rounded-full"><i
                        class="fa-solid fa-book-open"></i></span>
                <span class="drop-shadow-lg"> QUẢN LÝ NHÀ SÁCH</span>
            </h1>
        </div>
        <ul class="flex flex-col space-y-5 pt-8 px-4 border-t-2">
            <router-link v-for="(item, index) in filteredSidebarListItem" :key="index" :to="item.path"
                class="group flex items-center gap-x-4 hover:bg-white p-4 cursor-pointer group transition-all duration-300"
                active-class="active-link">
                <i :class="item.icon"
                    class="text-lg font-semibold group-hover:text-[#A0522D] opacity-50 group-hover:opacity-100"></i>
                <span class="text-lg font-semibold group-hover:text-[#A0522D]">{{ item.title }}</span>
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
.active-link {
    background-color: white;
    /* Change to your desired background color */
    color: #a0522d;
    /* Change to your desired text color */
}
</style>
<style scoped>
.active-link {
    background-color: white;
    /* Change to your desired background color */
    color: #a0522d;

    /* Change to your desired text color */
}
</style>