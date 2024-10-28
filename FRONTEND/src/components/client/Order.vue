<script setup>
import Header from "../../layouts/client/Header.vue";
import Footer from "../../layouts/client/Footer.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div class="flex-grow lg:py-10 lg:px-24 p-4 bg-[#f9fafa]">
            <div class="container max-w-screen-lg mx-auto">
                <h1 class="text-lg lg:text-[30px] font-bold text-center uppercase mb-8 text-[#333]">
                    Khám Phá Thế Giới Sách Tại Paul-To-Book
                </h1>
                <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                    <div class="grid gap-6 gap-y-8 text-sm grid-cols-1 lg:grid-cols-4">
                        <div class="flex justify-center items-center flex-col lg:col-span-2">
                            <div class="">
                                <h1 class="text-[20px] lg:text-[26px] font-semibold text-[#333]">Pokémon Đặc Biệt - Tập
                                    59</h1>
                            </div>
                            <div class="my-4">
                                <p class="font-semibold text-[16px] lg:text-[18px]">Giá mượn: <span
                                        class="text-[#DC143C]">20.000
                                        VNĐ</span></p>
                                <p class="font-semibold text-[16px] my-3 lg:text-[18px]">
                                    Tình trạng:
                                    <span class="text-[#A0522D]">còn 300 quyển</span>
                                </p>
                            </div>
                            <img src="../../assets/img/TruyenTranh-2.jpg"
                                class="w-[300px] lg:w-[350px] rounded-lg shadow-md" alt="">
                        </div>
                        <div class="lg:col-span-2 lg:border-l-2 lg:pl-6">
                            <form action="/editprofile" method="post"
                                class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5" enctype="multipart/form-data">
                                <div class="md:col-span-5 text-[#333f48] font-semibold">
                                    <p class="text-2xl">Tiến hành mượn sách</p>
                                    <p>Vui lòng điền thông tin đầy đủ.</p>
                                </div>
                                <div class="md:col-span-5 flex gap-4 flex-col">
                                    <p class="font-semibold text-[18px]">Chọn số lượng sản phẩm :</p>
                                    <div class="flex items-center gap-4">
                                        <button
                                            class="flex items-center justify-center w-10 h-10 bg-[#333] text-white font-bold rounded-lg hover:bg-[#A0522D] transition duration-200">-</button>
                                        <input id="quantity" name="total_amount" value="1" type="number" min="1"
                                            class="text-lg border-2 rounded-lg font-semibold h-10 w-16 text-center focus:outline-none focus:ring-2 focus:ring-[#A0522D]" />
                                        <button
                                            class="flex items-center justify-center w-10 h-10 bg-[#333] text-white font-bold rounded-lg hover:bg-[#A0522D] transition duration-200">+</button>
                                    </div>
                                </div>
                                <div class="md:col-span-5 flex gap-4 flex-col">
                                    <p class="text-[16px] font-semibold">Ngày trả:</p>
                                    <input type="date" name="return_date" class="border rounded p-2 w-full" required />
                                </div>
                                <div class="md:col-span-5">
                                    <label for="address" class="font-semibold text-[16px]">Địa chỉ</label>
                                    <input type="text" name="address" id="address"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder="My Tu - Soc Trang" />
                                </div>
                                <div class="md:col-span-5">
                                    <label for="city" class="font-semibold text-[16px]">Số điện thoại</label>
                                    <input type="text" name="phone" id="city"
                                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        placeholder="033-xxx-xxxx" />
                                </div>
                                <div class="md:col-span-5 text-center w-full">
                                    <div class="w-full">
                                        <button type="submit"
                                            class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">Mượn
                                            sách ngay</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>