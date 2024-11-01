<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

const products = ref([
    { id: 1, name: "Pokémon Đặc Biệt - Tập 59", price: "20.000 VNĐ", year: 2017, type: "Truyện tranh (Manga)", quantity: 300, image: "/src/assets/img/TruyenTranh-2.jpg", author: "Hidenori Kusaka, Satoshi Yamamoto", publisher: "Kim Đồng", description: "Trận chiến giành cây cổ thụ - Zeruneasu đã diễn ra! Dù dốc hết sức mình chiến đấu, Koruni vẫn thua trong gang tấc nên đành để cho “cây cổ thụ” và đá khai mở bị cướp đi!! Cảm thấy có lỗi trong việc Furadari bên phía kẻ thù đang dần chiếm được quyền lực! “Vũ khí tối thượng” - Di sản đen tối từ 3 ngàn năm trước cuối cùng cũng xuất hiện!!!!" },
    { id: 1, name: "Pokémon Đặc Biệt - Tập 59", price: "20.000 VNĐ", year: 2017, type: "Truyện tranh (Manga)", quantity: 300, image: "/src/assets/img/TruyenTranh-2.jpg", author: "Hidenori Kusaka, Satoshi Yamamoto", publisher: "Kim Đồng", description: "Trận chiến giành cây cổ thụ - Zeruneasu đã diễn ra! Dù dốc hết sức mình chiến đấu, Koruni vẫn thua trong gang tấc nên đành để cho “cây cổ thụ” và đá khai mở bị cướp đi!! Cảm thấy có lỗi trong việc Furadari bên phía kẻ thù đang dần chiếm được quyền lực! “Vũ khí tối thượng” - Di sản đen tối từ 3 ngàn năm trước cuối cùng cũng xuất hiện!!!!" },
]);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="flex-1 flex flex-col overflow-auto">
            <navbarAdmin />
            <div class="flex-1 bg-gray-100 p-6">
                <div class="text-center py-4">x
                    <h2 class="text-[#333] font-bold text-[20px] block lg:hidden">DANH SÁCH SẢN PHẨM</h2>
                </div>
                <div id="all_products" class="overflow-auto">
                    <table class="w-full border-collapse bg-white whitespace-nowrap text-center text-sm text-gray-500">
                        <thead class="bg-[#A0522D] text-white">
                            <tr>
                                <th scope="col" class="px-6 py-4 font-semibold">ID</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Tên sản phẩm</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Ảnh sản phẩm</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Giá</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Năm xuất bản</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Loại</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Số lượng</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Tác giả</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Nhà xuất bản</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Mô tả</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Điều chỉnh</th>
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            <tr class="border-t border-slate-500" v-for="product in products" :key="product.id">
                                <th class="px-6 py-4 font-medium text-gray-900">{{ product.id }}</th>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ product.name }}
                                </td>
                                <td><img class="w-[125px] py-2" :src="product.image" alt="Product Image" /></td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ product.price
                                    }}</td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ product.year }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ product.type }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{
                                    product.quantity }}</td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ product.author
                                    }}</td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{
                                    product.publisher }}</td>
                                <td class="px-6 py-4 whitespace-nowrap text-ellipsis overflow-hidden max-w-56">
                                    <p class="overflow-hidden text-ellipsis whitespace-nowrap">{{ product.description }}
                                    </p>
                                </td>
                                <td class="flex justify-center items-center gap-2 px-7 py-7 flex-col">
                                    <a :href="`/edit/${product.id}`"
                                        class="inline-block bg-[#4169E1] px-4 py-2 font-semibold rounded-md text-[#fff] whitespace-nowrap">Sửa
                                        sản phẩm</a>
                                    <form @submit.prevent="deleteProduct(product.id)">
                                        <button type="submit"
                                            class="inline-block bg-[#DC143C] px-4 py-2 font-semibold rounded-md text-[#fff] whitespace-nowrap">Xóa
                                            sản phẩm</button>
                                    </form>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>