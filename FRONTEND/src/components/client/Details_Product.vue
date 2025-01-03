<script setup>
import Footer from "../../layouts/client/Footer.vue";
import Header from "../../layouts/client/Header.vue";
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted, computed } from 'vue';

const route = useRoute();
const router = useRouter();
const bookDetails = ref({});
const quantity = ref(1);
const receivingMethod = ref('Tại thư viện'); // Default receiving method

const fetchBookDetails = async (maSach) => {
    try {
        const response = await fetch(`http://localhost:3000/api/sach/${maSach}`);
        const data = await response.json();
        bookDetails.value = data;
        console.log('Book details:', data);
    } catch (error) {
        console.error('Error fetching book details:', error);
    }
};

const borrowBook = async () => {
    const maDocGia = localStorage.getItem('MaDocGia');
    if (!maDocGia) {
        alert("Vui lòng đăng nhập để mượn sách.");
        router.push('/login');
        return;
    }

    const maSach = bookDetails.value.MaSach;
    const ngayMuon = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

    const borrowData = {
        MaDocGia: maDocGia,
        MaSach: maSach,
        SoLuong: quantity.value,
        NgayMuon: ngayMuon,
        NgayTra: null,
        TrangThai: false,
        HinhThucNhanSach: receivingMethod.value, // Add receiving method
    };

    try {
        const response = await fetch('http://localhost:3000/api/theodoimuonsach', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(borrowData)
        });

        if (response.ok) {
            console.log('Book borrowed successfully');
            alert("Mượn sách thành công!");
            // Redirect to home page
            router.push('/');
        } else {
            console.error('Error borrowing book:', response.statusText);
        }
    } catch (error) {
        console.error('Error borrowing book:', error);
    }
};

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
};

const totalPrice = computed(() => {
    return formatPrice(bookDetails.value.DonGia * quantity.value * 1000);
});

onMounted(() => {
    const maSach = route.query.MaSach;
    if (maSach) {
        fetchBookDetails(maSach);
    }
});
</script>

<template>
    <div class="relative font-sans overflow-hidden min-h-screen">
        <Header />
        <div class="lg:pt-10 lg:px-14 p-4 bg-[#e8e8e8]">
            <div class="flex lg:gap-8 lg:flex-row flex-col bg-white rounded-xl">
                <div class="w-full lg:w-[40%] gap-8 p-8 flex flex-col justify-center items-center">
                    <div class="flex flex-col gap-5 ">
                        <img :src="bookDetails.HinhAnh" class="w-[500px]" alt="" />
                    </div>
                </div>
                <div class="w-full lg:w-[60%] flex flex-col gap-3">
                    <div class="flex flex-col gap-3 p-8">
                        <h1 class="text-[24px] lg:text-[40px] font-bold uppercase">
                            {{ bookDetails.TenSach }}
                        </h1>
                        <p class="text-[18px] lg:text-[20px] font-normal">Mã sách: <span
                                class="text-[#A0522D] font-medium">{{ bookDetails.MaSach }}</span></p>
                        <p class="text-[18px] font-normal lg:text-[20px]">
                            Loại sách:
                            <span class="text-[#A0522D] font-medium">{{ bookDetails.TheLoai }}</span>
                        </p>
                        <p class="text-[18px] font-normal lg:text-[20px]">
                            Tình trạng:
                            <span class="text-[#A0522D] font-medium">vẫn còn {{ bookDetails.SoQuyen }} quyển trong thư
                                viện</span>
                        </p>
                        <p class="text-[18px] font-normal lg:text-[20px]">
                            Giá mượn:
                            <span class="text-[#A0522D] font-medium">{{ formatPrice(bookDetails.DonGia * 1000) }}</span>
                        </p>
                        <p class="text-[18px] font-normal lg:text-[20px]">
                            Tổng tiền:
                            <span class="text-[#A0522D] font-medium">{{ totalPrice }}</span>
                        </p>
                        <hr />
                        <h2 class="text-[20px] lg:text-[26px] font-normal">
                            Thông tin chi tiết
                        </h2>
                        <p class="text-[18px] lg:text-[20px]">
                            Năm xuất bản: <span>{{ bookDetails.NamXuatBan }}</span>
                        </p>
                        <p class="text-[18px] lg:text-[20px]">
                            Lưu ý: <span class="text-[#A0522D] font-normal">Chính sách khuyến mãi trên PaulTo.com sẽ
                                áp dụng cho Hệ thống Nhà sách Paul To trên toàn quốc.</span>
                        </p>
                        <div class="flex items-center gap-4">
                            <label for="quantity" class="text-[18px] lg:text-[20px] font-normal">Số lượng:</label>
                            <input type="number" id="quantity" v-model="quantity" min="1" :max="bookDetails.SoQuyen"
                                class="w-20 p-2 border rounded" />
                        </div>
                        <div class="flex items-center gap-4 mt-4">
                            <label for="receivingMethod" class="text-[18px] lg:text-[20px] font-normal">Hình thức nhận
                                sách:</label>
                            <select id="receivingMethod" v-model="receivingMethod" class="p-2 border rounded">
                                <option value="Tại thư viện">Tại thư viện</option>
                                <option value="Qua bưu điện">Qua bưu điện</option>
                            </select>
                        </div>
                        <button @click="borrowBook"
                            class="w-full bg-[#e3895f] flex flex-col gap-2 justify-center items-center p-4 text-[14px] lg:text-[20px] font-normal text-white hover:bg-[#A0522D] transition-all duration-200">MƯỢN
                            SÁCH NGAY</button>
                        <hr>
                        <p class="text-center text-[18px] mt-4 font-normal">Hotline hỗ trợ : <span
                                class="text-[#A0522D]"><i class="fa-solid fa-square-phone-flip"></i> 072-456-7893</span>
                            (7:30-22:00)</p>
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