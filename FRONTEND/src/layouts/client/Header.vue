<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const maDocGia = ref(localStorage.getItem('MaDocGia'));
const userData = ref(null);

const isLoggedIn = computed(() => !!maDocGia.value);

const handleLogout = () => {
    localStorage.removeItem('MaDocGia');
    maDocGia.value = null;
    userData.value = null;
    router.push('/login');
};

const fetchUserData = async () => {
    if (maDocGia.value) {
        try {
            const response = await fetch(`http://localhost:3000/api/docgia/${maDocGia.value}`);
            if (response.ok) {
                userData.value = await response.json();
            } else {
                console.error('Error fetching user data:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
};

onMounted(() => {
    fetchUserData();
});
</script>

<template>
    <header>
        <div class="relative flex items-center justify-between lg:py-4 lg:px-10 p-4">
            <div class="px-4 cursor-pointer" v-on:click="$router.push('/')">
                <h1 class="font-bold lg:text-2xl text-[14px] uppercase text-[#A0522D]">
                    Paul-To-Book
                </h1>
            </div>
            <div class="flex items-center">
                <ul class="flex uppercase gap-x-4 text-[#A0522D] mr-10">
                    <li>
                        <router-link to="/" class="font-bold group-hover:text-[#A0522D] transition-all duration-300">
                            Trang chủ
                        </router-link>
                    </li>
                    <li>
                        <a v-if="isLoggedIn" @click.prevent="handleLogout"
                            class="font-bold group-hover:text-[#A0522D] transition-all duration-300 cursor-pointer">
                            ĐĂNG XUẤT
                        </a>
                        <router-link v-else to="/login"
                            class="font-bold group-hover:text-[#A0522D] transition-all duration-300">
                            Đăng nhập
                        </router-link>
                    </li>
                </ul>

                <div class="flex items-center lg:space-x-8 space-x-5 px-4">
                    <div v-if="userData" class="user flex space-x-4 items-center justify-center cursor-pointer">
                        <span class="uppercase">{{ userData.Ten }}</span>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                            class="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] rounded-full border-2 border-[#C0C0C0]"
                            alt="" />

                    </div>
                    <button class="open_menu lg:hidden block">
                        <i class="fa-solid fa-bars text-[26px] text-[#A0522D]"></i>
                    </button>
                </div>
            </div>
            <!-- <div class="sidebar_menu fixed top-0 -right-[100%] bg-[#fff] p-4 w-full h-full z-40">
                <div class="flex justify-between items-center p-2">
                    <h1 class="font-bold text-xl uppercase text-[#A0522D]">
                        Paul-To-Book
                    </h1>
                    <button class="close_menu">
                        <i class="fa-solid fa-x text-2xl text-[#A0522D] ease-out duration-[0.4s] hover:scale-[1.1]"></i>
                    </button>
                </div>
                <ul class="flex flex-col my-10">
                    <li class="py-[15px]">
                        <a v-if="isLoggedIn" @click.prevent="handleLogout"
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300 cursor-pointer">
                            Đăng xuất
                        </a>
                        <router-link v-else to="/login"
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">
                            Đăng nhập
                        </router-link>
                    </li>
                    <li class="py-[15px]">
                        <router-link to="/"
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">
                            Trang chủ
                        </router-link>
                    </li>
                    <li class="py-[15px]">
                        <router-link to="/lich-su-muon-sach"
                            class="border-b-2 border-transparent hover:border-b-2 hover:border-[#A0522D] font-semibold text-[20px] hover:text-[#A0522D] transition-colors duration-300">
                            Lịch sử mượn sách
                        </router-link>
                    </li>
                </ul>
            </div> -->
            <!-- <div
                class="info absolute top-24 right-[-100%] flex flex-col gap-3 p-6 border-2 border-[#C0C0C0] rounded-2xl bg-[#fff] shadow-md z-10">
                <div class="mb-4 flex justify-center">
                    <img src="../../assets/img/review_1.png"
                        class="w-24 h-24 rounded-full border-[3px] border-[#A0522D]" alt="Avatar" />
                </div>
                <div class="user-info text-center" v-if="userData">
                    <p class="text-2xl font-bold text-gray-800">{{ userData.TenDocGia }}</p>
                    <p class="text-sm text-[#A0522D]">{{ userData.Email }}</p>
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
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Chỉnh sửa hồ
                            sơ</span>
                    </a>
                    <a v-if="isLoggedIn" @click.prevent="handleLogout"
                        class="menu-item flex items-center p-3 hover:bg-[#A0522D] transition-all duration-300 rounded-md group cursor-pointer">
                        <i class="fa-solid fa-right-to-bracket text-gray-800 group-hover:text-white"></i>
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Đăng xuất</span>
                    </a>
                    <router-link v-else to="/login"
                        class="menu-item flex items-center p-3 hover:bg-[#A0522D] transition-all duration-300 rounded-md group">
                        <i class="fa-solid fa-right-to-bracket text-gray-800 group-hover:text-white"></i>
                        <span class="ml-3 text-lg font-semibold text-gray-800 group-hover:text-white">Đăng nhập</span>
                    </router-link>
                </div>
            </div> -->
        </div>
    </header>
</template>

<style scoped>
/* Add your styles here */
</style>