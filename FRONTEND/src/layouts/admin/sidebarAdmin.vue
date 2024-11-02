<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Define the list of sidebar items
const sidebarListItem = [
    {
        title: "Tổng quan",
        icon: "fab fa-buromobelexperte",
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
        icon: "fas fa-calculator",
        path: "/quantrivien/theodoimuonsach"
    },
    {
        title: "Thêm quản trị viên",
        icon: "fa-solid fa-user-secret",
        path: "/quantrivien/dangky"
    },
];

// Get the user's role from local storage
const chucVu = localStorage.getItem('chucVu');

// Filter the sidebar items based on the user's role
const filteredSidebarListItem = computed(() => {
    if (chucVu === 'admin') {
        // If the user is an admin, show all items
        return sidebarListItem;
    } else {
        // If the user is not an admin, hide the first and seventh items
        return sidebarListItem.filter((item, index) => index !== 3 && index !== 6);
    }
});

const dangXuat = () => {
    console.log('Navigating to /nhanvien/dangnhap');
    localStorage.removeItem('chucVu');
    router.push('/nhanvien/dangnhap');
};
</script>

<template>
    <div class="fixed left-0 top-0 min-h-screen w-80 bg-[#333] text-white flex-shrink-0 hidden lg:block">
        <div class="px-6 py-5 bg-[#A0522D]">
            <h1 class="font-bold text-xl uppercase text-white flex items-center gap-x-4 drop-shadow-lg">
                <span
                    class="flex justify-center items-center w-[50px] h-[50px] bg-[rgba(0,0,0,0.2)] p-3 rounded-full"><i
                        class="fa-solid fa-book-open"></i></span>
                <span class="drop-shadow-lg"> QUẢN LÝ NHÀ SÁCH</span>
            </h1>
        </div>
        <ul class="flex flex-col border-t-2">
            <!-- Loop through the filtered sidebar items and create a router-link for each -->
            <router-link v-for="(item, index) in filteredSidebarListItem" :key="index" :to="item.path"
                class="group p-5 pl-7 flex items-center gap-x-4 hover:bg-[rgba(0,0,0,.5)] cursor-pointer group transition-all duration-300"
                active-class="active-link">
                <i :class="item.icon" class="text-lg font-semibold group-hover:opacity-100"></i>
                <span class="text-lg font-semibold">{{ item.title }}</span>
            </router-link>
            <li @click="dangXuat"
                class="group p-5 pl-7 flex items-center gap-x-4 hover:bg-[rgba(0,0,0,.5)] cursor-pointer group transition-all duration-300"
                active-class="active-link">
                <i class="fa-solid fa-right-from-bracket"></i>
                <span class="text-lg font-semibold"> Đăng xuất</span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Style for the active link */
.active-link {
    background-color: #DE8F5F;
    /* Change to your desired background color */
    color: #fff;
    /* Change to your desired text color */
    text-shadow: 0 0 1px #000;
    /* Add text shadow for better readability */
}
</style>