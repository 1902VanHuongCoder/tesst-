<script setup>
import Header from "../../layouts/client/Header.vue";
import Footer from "../../layouts/client/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen overflow-hidden bg-gray-50">
    <Header />
    <div class="flex-grow py-10 px-4 lg:px-24">
      <h1 class="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-8">Lịch Sử Mượn Sách</h1>
      <div class="bg-white border-2 rounded-lg shadow-md p-8">
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-6">
          <div class="mb-4 lg:mb-0">
            <h2 class="text-xl font-bold text-[#A0522D]">Paul-To-Book</h2>
            <p class="text-sm text-gray-500">Yêu cầu mượn sách đang xử lý</p>
          </div>
          <div class="text-sm text-[#DC143C] font-semibold">
            <i class="fa-solid fa-clock"></i> Đang xử lý
          </div>
        </div>
        <div class="flex flex-col lg:flex-row gap-6 items-center">
          <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[180px] rounded-lg shadow" alt="Sách" />
          <div class="flex-grow">
            <h3 class="text-xl font-semibold text-gray-800">Pokémon Đặc Biệt - Tập 59</h3>
            <p class="text-[14px] lg:text-lg text-gray-600 font-semibold mt-2">Giá mượn: <span
                class="text-red-500">20.000 VNĐ</span></p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Loại sách: <span
                  class="text-gray-800">Truyện tranh (Manga)</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Số lượng: <span
                  class="text-[#A0522D]">1</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Tác giả: <span
                  class="text-gray-800">Hidenori Kusaka, Satoshi Yamamoto</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Nhà xuất bản: <span
                  class="text-gray-800">Kim Đồng</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Thể loại: <span
                  class="text-[#A0522D]">Action, Adventure, Comedy</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Ngày mượn: <span
                  class="text-gray-800">20-07-2024</span></p>
              <p class="text-[14px] lg:text-lg font-semibold text-gray-600">Thời gian mượn: <span
                  class="text-gray-800">1 tuần</span></p>
            </div>
          </div>
        </div>
        <div class="border-t border-[#A0522D] mt-6 pt-4">
          <div class="flex justify-center gap-4 mt-6">
            <button class="bg-red-500 text-white px-5 py-2 rounded-lg shadow hover:bg-red-600 transition">
              Hủy yêu cầu
            </button>
            <button class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
              Mượn lại
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
