<script setup>
import Footer from "../../layouts/client/Footer.vue";
import Header from "../../layouts/client/Header.vue";
</script>
<template>
    <div class="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <div class="flex-grow lg:py-10 lg:px-10 p-4">
            <div class="w-full overflow-auto my-6">
                <h2 class="text-2xl font-bold text-center mb-4">Giỏ Hàng Của Bạn</h2>
                <table
                    class="w-full border-collapse whitespace-nowrap bg-white text-center text-sm text-gray-700 shadow-md rounded-lg">
                    <thead class="bg-gray-800 text-white">
                        <tr>
                            <th scope="col" class="text-base px-6 py-4 font-semibold">Tên sản phẩm</th>
                            <th scope="col" class="text-base flex justify-start px-6 py-4 font-semibold">
                                Hình ảnh
                            </th>
                            <th scope="col" class="text-base px-6 py-4 font-semibold">Còn lại</th>
                            <th scope="col" class="text-base px-6 py-4 font-semibold">Giá mượn</th>
                            <th scope="col" class="text-base px-6 py-4 font-semibold">Hành động</th>
                        </tr>
                    </thead>
                    <tbody class="w-full text-center">
                        <tr class="border-t border-slate-500">
                            <td class="whitespace-nowrap font-semibold">Pokémon Đặc Biệt - Tập 59</td>
                            <td class="py-2">
                                <img src="../../assets/img/TruyenTranh-2.jpg" class="w-[150px] rounded-lg" alt="" />
                            </td>
                            <td class="whitespace-nowrap font-semibold">300</td>
                            <td class="whitespace-nowrap font-semibold">20.000 VNĐ</td>
                            <td class="flex items-center gap-4 flex-col mt-4">
                                <a href=""
                                    class="bg-gray-800 text-white px-[15px] py-2 rounded-md hover:bg-gray-600 transition duration-300">Mượn
                                    sản phẩm</a>
                                <form action="" method="POST">
                                    <button type="submit"
                                        class="bg-[#DC143C] text-white px-[22px] py-2 rounded-md hover:bg-[#B22222] transition duration-300 mb-4">Xóa
                                        sản phẩm</button>
                                </form>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer />
    </div>
</template>

<style></style>