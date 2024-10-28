<script setup>
import Footer from "../../layouts/client/Footer.vue";
import Header from "../../layouts/client/Header.vue";

</script>
<template>
    <div class="relative font-sans overflow-hidden min-h-screen">
        <Header />
        <div class="lg:pt-10 lg:px-14 p-4 bg-[#e8e8e8]">
            <div class="flex lg:gap-8 lg:flex-row flex-col bg-white rounded-xl">
                <div class="w-full lg:w-[40%] gap-8 p-8 flex flex-col justify-start items-center">
                    <div class="flex flex-col gap-5">
                        <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[500px]" alt="" />
                    </div>
                    <div class="flex flex-col gap-5">
                        <h2 class="text-[22px] font-semibold text-left">Một số ảnh chi tiết</h2>
                        <div class="flex gap-4">
                            <div
                                class="p-1 border-2 border-gray-300 cursor-pointer transition-all duration-200 hover:border-[#A0522D] rounded-xl">
                                <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[150px]" alt="" />
                            </div>
                            <div
                                class="p-1 border-2 border-gray-300 cursor-pointer transition-all duration-200 hover:border-[#A0522D] rounded-xl">
                                <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[150px]" alt="" />
                            </div>
                            <div
                                class="p-1 border-2 border-gray-300 cursor-pointer transition-all duration-200 hover:border-[#A0522D] rounded-xl">
                                <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[150px]" alt="" />
                            </div>
                            <div
                                class="p-1 border-2 border-gray-300 cursor-pointer transition-all duration-200 hover:border-[#A0522D] rounded-xl">
                                <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[150px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-[60%] flex flex-col gap-3">
                    <div class="flex flex-col gap-3 p-8">
                        <h1 class="text-[24px] lg:text-[40px] font-semibold">
                            Pokémon Đặc Biệt - Tập 59
                        </h1>
                        <p class="text-[18px] lg:text-[20px] font-semibold">Mã sách: <span
                                class="text-[#A0522D] font-medium">208449</span></p>
                        <p class="text-[18px] font-semibold lg:text-[20px]">
                            Loại sách:
                            <span class="text-[#A0522D] font-medium">Truyện tranh (Manga)</span>
                        </p>
                        <p class="text-[18px] font-semibold lg:text-[20px]">
                            Tình trạng:
                            <span class="text-[#A0522D] font-medium">vẫn còn 300 quyển trong thư viện</span>
                        </p>
                        <p class="text-[18px] font-semibold lg:text-[20px]">
                            Giá mượn:
                            <span class="text-[#A0522D] font-medium">20.000 VNĐ</span>
                        </p>
                        <hr />
                        <h2 class="text-[20px] lg:text-[26px] font-semibold">
                            Thông tin chi tiết
                        </h2>
                        <p class="text-[18px] lg:text-[20px]">
                            Năm xuất bản: <span>2024</span>
                        </p>
                        <p class="text-[18px] lg:text-[20px]">
                            Tác giả: <span>Hidenori Kusaka, Satoshi Yamamoto</span>
                        </p>
                        <p class="text-[18px] lg:text-[20px]">
                            Nhà xuất bản: <span>Kim Đồng</span>
                        </p>
                        <p class="text-[18px] lg:text-[20px]">
                            Thể loại: <span class="text-[#A0522D] font-semibold">Action, Adventur, Comedy, Elemental
                                Powers, Family Friendly, Fantasy, Monsters, Shounen</span>
                        </p>
                        <p class="text-[18px] lg:text-[20px]">
                            Lưu ý: <span class="text-[#A0522D] font-semibold">Chính sách khuyến mãi trên PaulTo.com sẽ
                                áp dụng cho Hệ thống Nhà sách Paul To trên toàn quốc.</span>
                        </p>
                        <a href=""
                            class="w-full bg-[#e3895f] flex flex-col gap-2 justify-center items-center p-4 text-[14px] lg:text-[20px] font-semibold text-white hover:bg-[#A0522D] transition-all duration-200">MƯỢN
                            SÁCH NGAY</a>
                        <div class="flex md:items-center justify-center gap-2 flex-col md:flex-row">
                            <p class="text-[#333f48] ml-2 my-2 text-[18px] pr-4 md:border-r-2"><i
                                    class="fa-solid fa-tag text-[#4169E1]"></i> Số lần được mượn <span
                                    class="font-bold">40</span> lần</p>
                            <p class="text-[#333f48] ml-2 text-[18px]"><i class="fa-solid fa-eye text-[#A0522D]"></i> Có
                                <span class="font-bold">
                                    30
                                </span> lượt xem sản phẩm
                            </p>
                        </div>
                        <hr>
                        <p class="text-center text-[18px] mt-4 font-semibold">Hotline hỗ trợ : <span
                                class="text-[#A0522D]"><i class="fa-solid fa-square-phone-flip"></i> 072-456-7893</span>
                            (7:30-22:00)</p>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-3 bg-white rounded-2xl p-8 my-6">
                <h1 class="text-[20px] lg:text-[26px] font-semibold">
                    Mô tả sản phẩm
                </h1>
                <h2 class="text-[16px] lg:text-[20px] font-semibold">
                    Pokémon Đặc Biệt - Tập 59
                </h2>
                <p class="text-[16px] lg:text-[20px] font-medium text-justify">
                    Trận chiến giành cây cổ thụ - Zeruneasu đã diễn ra! Dù dốc hết sức
                    mình chiến đấu, Koruni vẫn thua trong gang tấc nên đành để cho
                    “cây cổ thụ” và đá khai mở bị cướp đi!! Cảm thấy có lỗi trong việc
                    này, X một lần nữa đóng kín trái tim lại… Trong khi đó, tên trùm
                    Furadari bên phía kẻ thù đang dần chiếm được quyền lực! “Vũ khí
                    tối thượng” - Di sản đen tối từ 3 ngàn năm trước cuối cùng cũng
                    xuất hiện!!!!
                </p>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style></style>