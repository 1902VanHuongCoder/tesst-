<script setup>
import { ref, onMounted } from "vue";
import Footer from "../../layouts/client/Footer.vue";
import Header from "../../layouts/client/Header.vue";

const isOpenType = ref(false);
const toggleOpen = () => {
    isOpenType.value = !isOpenType.value;
};

const displayedBooks = ref([]);

const fetchBookData = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/sach');
        const data = await response.json();
        // console.log(data.displayedBooks);
        displayedBooks.value = data;
    } catch (error) {
        console.error('Error fetching book data:', error);
    }
};

onMounted(() => {
    fetchBookData();
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
                <div
                    class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 text-[#333f48] cursor-pointer">
                    <div v-for="(item, index) in displayedBooks" :key="index"
                        class="flex flex-col items-center border-2 rounded-lg shadow-lg p-4 bg-white transition-transform duration-300 hover:shadow-2xl">
                        <img :src="item.HinhAnh" alt="" class="w-[200px] h-[200px] object-cover rounded-lg" />
                        <div class="text-center">
                            <h3 class="w-60 whitespace-nowrap text-ellipsis overflow-hidden text-center">
                                <a href=""
                                    class="text-lg font-semibold text-[#A0522D] hover:text-[#8B4513] transition-all duration-300">{{
                                    item.TenSach }}</a>
                            </h3>
                            <p class="text-md text-gray-700 mb-2">{{ item.NhaXuatBan }}</p>
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

<style scoped>
/* Add your styles here */
</style>