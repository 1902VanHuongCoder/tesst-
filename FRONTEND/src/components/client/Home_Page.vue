<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { computed } from "vue";
import Footer from "../../layouts/client/Footer.vue";
import Header from "../../layouts/client/Header.vue";

const bookCollection = ref([
    {
        title: "Muốn - Một Tiểu Thuyết",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Emma Cline",
        genre: "TieuThuyet",
    },
    {
        title: "Tiểu Thuyết Việt Nam 1945 -1975",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Phạm Ngọc Hiền",
        type: "TieuThuyet",
    },
    {
        title: "Tiểu Thuyết Việt Nam 1945 -1975",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Phạm Ngọc Hiền",
        type: "TieuThuyet",
    },
    {
        title: "Tiểu Thuyết Việt Nam 1945 -1975",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Phạm Ngọc Hiền",
        type: "TieuThuyet",
    },
    {
        title: "Pokémon Đặc Biệt - Tập 59",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Hidenori Kusaka, Satoshi Yamamoto",
        genre: "TruyenTranh",
    },
    {
        title: "Shin - Cậu Bé Bút Chì - Truyện Dài - Tập 17 - Công Phá Xứ Sở Mộng Mơ",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Yoshito Usui, Mirei Takata",
        genre: "TruyenTranh",
    },
    {
        title: "Pokémon Đặc Biệt - Tập 60",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Hidenori Kusaka, Satoshi Yamamoto",
        genre: "TruyenTranh",
    },
    {
        title: "Shin - Cậu Bé Bút Chì - Phiên Bản Hoạt Hình Màu - Tập 6 - Vua Côn Trùng Kasukabe (Tái Bản 2024)",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Yoshito Usui",
        genre: "TruyenTranh",
    },
    {
        title: "Từ Điển Tâm Lý",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Shozo Shibuya",
        genre: "TuDien",
    },
    {
        title: "Từ Điển Mỹ Học",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Nguyễn Văn Dân",
        genre: "TuDien",
    },
    {
        title: "Từ Điển Triết Học Tây Phương - Từ Điển Triết Học Gadamer - The Gadamer Dictionary",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Chris Lawn, Niall Keane",
        genre: "TuDien",
    },
    {
        title: "Từ Điển Cuộc Đời",
        coverImage: "/src/assets/img/TieuThuyet-1.jpg",
        writer: "Hàn Mai",
        genre: "TuDien",
    },
]);

const bookOptions = ref([
    { name: "Tất cả", type: "All" },
    { name: "Truyện tranh", type: "TruyenTranh" },
    { name: "Tiểu thuyết", type: "TieuThuyet" },
    { name: "Từ điển", type: "TuDien" }
]);

const isOpenType = ref(false);
const toggleOpen = () => {
    isOpenType.value = !isOpenType.value;
};

const selectedGenre = ref(null);
const chooseBookGenre = (genre) => {
    selectedGenre.value = genre;
};

const displayedBooks = computed(() => {
    return selectedGenre.value === "All"
        ? bookCollection.value
        : bookCollection.value.filter((book) => book.genre === selectedGenre.value);
});

onMounted(() => {
    selectedGenre.value = "All";
});
</script>
<template>
    <div class="relative font-sans overflow-hidden min-h-screen">
        <Header />
        <div class="relative pb-28">
            <div class="lg:pt-10 lg:px-14 p-4">
                <div class="flex flex-col gap-7 xl:flex-row py-10 overflow-hidden">
                    <div class="xl:w-[60%] w-full flex flex-col xl:items-start justify-center space-y-4">
                        <p class="font-bold text-[#A0522D] lg:text-2xl text-xl text-center">
                            Paul - To
                        </p>
                        <h1 class="font-bold text-[#333] lg:text-[50px] text-[30px] text-center xl:text-start">
                            Book <span class="text-[#A0522D]">Library</span>
                        </h1>
                        <p class="text-sm lg:text-lg font-medium text-[#333] text-center xl:text-left">
                            <span class="text-[#A0522D]">Paul - To </span>cam kết mối liên hệ này xuất phát
                            từ sự trân trọng của chúng tôi, cam kết
                            phục vụ sản phẩm với chất lượng tốt nhất, tạo mối liên kết đến từng khách hàng, thực hiện
                            trách nhiệm với cộng đồng tại nơi chúng tôi hoạt động kinh doanh. Nếu có thắc mắc xin hãy
                            liên hệ đến Hotline dưới đây để được hỗ trợ tốt hơn.
                        </p>
                        <p class="text-sm lg:text-lg font-medium text-[#333] text-center">Địa chỉ : <span
                                class="text-[#A0522D]"> Mỹ
                                tú - Sóc Trăng</span></p>
                        <p class="text-sm lg:text-lg font-medium text-[#333] text-center">
                            Liên hệ: <span class="text-[#A0522D]">072-456-7893(7:30-22:00)</span>
                        </p>
                    </div>
                    <div class="w-full lg:w-[45%] flex items-center justify-center">
                        <img class="w-[600px]" src="../../assets/img/table.png" alt="" />
                    </div>
                </div>
                <hr class="my-8">
                <div class="w-full bg-[#A0522D] flex justify-between flex-col gap-6 lg:flex-row items-center p-7">
                    <div style="background-color: rgba(0, 0, 0, 0.5);"
                        class="p-5 w-full lg:w-[45%] text-[#fff] flex flex-col gap-2">
                        <h1 class="text-[32px] font-semibold">Book Library</h1>
                        <p class="text-[16px]">Paul-To-Book hệ thống mượn sách uy tính và nhiều sự ưu đãi.</p>
                        <p class="text-[16px]">Góp ý : <span
                                class="text-[#FFD700] font-semibold">paulto@gmail.com</span></p>
                    </div>
                    <img src="../../assets/img/about.png" class="w-[350px]" alt="">
                </div>
            </div>
            <div class="flex xl:flex-row flex-col justify-center gap-4 lg:gap-8 lg:pt-10 lg:px-10 p-4">
                <div class="w-[20%] hidden xl:block flex-col py-1 px-2">
                    <h2 class="py-2 flex items-center gap-2 text-[#333f48]">
                        <i class="fa-solid fa-book text-[#A0522D]"></i>
                        <strong>Tùy chọn loại sách</strong>
                    </h2>
                    <hr class="border border-[#333f48] rounded-full" />
                    <ul>
                        <li v-for="(option, index) in bookOptions" :key="index" @click="chooseBookGenre(option.type)"
                            class="py-[6px] px-3 text-[#333f48] border border-1 cursor-pointer hover:border-[#A0522D] hover:text-[#A0522D] transition-all duration-100 my-3">
                            {{ option.name }}
                        </li>
                    </ul>
                </div>
                <div class="relative block xl:hidden w-full">
                    <div @click="toggleOpen"
                        class="relative border border-[#a3a3a3] rounded py-1 px-2 cursor-pointer clickdown">
                        <div class="flex items-center justify-between">
                            <h2 class="py-2 flex items-center gap-2 text-[#333f48]">
                                <i class="fa-solid fa-book-open text-[#A0522D]"></i><strong> Phân loại sách</strong>
                            </h2>
                            <i class="fa-solid fa-caret-down ease-out duration-500"
                                :class="isOpen ? 'rotate-0' : 'rotate-180'"></i>
                        </div>
                    </div>
                    <ul v-show="isOpen"
                        class="absolute top-[120%] left-0 z-40 w-full bg-[#fff] p-3 rounded-lg shadow border-2 border-[#a3a3a3]">
                        <li v-for="(option, index) in bookOptions" :key="index" @click="chooseBookGenre(option.type)"
                            class="mt-1 text-[#333f48] py-2 px-3 cursor-pointer hover:text-[#A0522D] mb-1 font-semibold transition-all duration-200">
                            {{ option.name }}
                            <hr class="bg-[#A0522D] my-2" />
                        </li>
                    </ul>
                </div>
                <div
                    class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 text-[#333f48] cursor-pointer">
                    <div v-for="(item, index) in displayedBooks" :key="index"
                        class="flex flex-col items-center border-2 rounded-lg shadow-lg p-4 bg-white transition-transform duration-300 hover:shadow-2xl">
                        <img :src="item.coverImage"
                            class="w-48 h-72 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105"
                            alt="Book Cover" />
                        <div class="text-center">
                            <h3 class="w-60 whitespace-nowrap text-ellipsis overflow-hidden text-center">
                                <a href=""
                                    class="text-lg font-semibold text-[#A0522D] hover:text-[#8B4513] transition-all duration-300">{{
                                        item.title }}</a>
                            </h3>
                            <p class="text-md text-gray-700 mb-2">{{ item.writer }}</p>
                        </div>
                        <button
                            class="flex items-center justify-center bg-gradient-to-r from-[#A0522D] to-[#8B4513] text-white text-lg font-semibold py-2 px-6 rounded-full shadow-md transition-all duration-300 hover:scale-105">
                            <i class="fa-solid fa-plus-circle mr-2"></i> Thêm Giỏ Hàng
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style></style>