<script setup>
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="flex-1 flex flex-col overflow-auto">
            <navbarAdmin />
            <div class="flex-1 bg-gray-100 p-6">
                <div class="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8 border-2">
                    <form action="/updateprofile" method="post" class="grid gap-6 text-sm grid-cols-1 md:grid-cols-5">
                        <div class="md:col-span-5 text-[#333f48] font-semibold">
                            <p class="text-3xl">Chỉnh sửa sản phẩm</p>
                            <p class="my-2 text-lg">Vui lòng điền đầy đủ.</p>
                        </div>

                        <div class="md:col-span-5">
                            <label for="name" class="font-semibold text-[16px]">Tên sản phẩm</label>
                            <input type="text" name="name" id="name" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="Tên sản phẩm" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="price" class="font-semibold text-[16px]">Giá</label>
                            <input type="text" name="price" id="price" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="20.xxx" />
                        </div>
                        <div class="md:col-span-5">
                            <label for="year" class="font-semibold text-[16px]">Năm xuất bản</label>
                            <input type="text" name="year" id="year" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder="20xx" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="author" class="font-semibold text-[16px]">Tác giả</label>
                            <input type="text" name="author" id="author" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Tên tác giả" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="type" class="font-semibold text-[16px]">Loại sản phẩm</label>
                            <input type="text" name="type" id="type" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Tên nhà xuất bản" />
                        </div>

                        <div class="flex flex-col justify-center w-full gap-2">
                            <label for="" class="font-semibold text-[16px]">Nhà xuất bản</label>
                            <select name="type"
                                class="outline-0 p-2 block w-[80%] rounded-md border shadow-md focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50 cursor-pointer">
                                <option checked value="TruyenTranh">Truyện tranh</option>
                                <option value="TuDien">Từ điển</option>
                                <option value="TieuThuyet">Tiểu thuyết</option>
                            </select>
                        </div>

                        <div class="md:col-span-5">
                            <label for="quantity" class="font-semibold text-[16px]">Số lượng</label>
                            <input type="number" name="quantity" id="quantity" value=""
                                class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                placeholder="Nhập số lượng" />
                        </div>

                        <div class="md:col-span-5">
                            <label for="description" class="font-semibold text-[16px]">Mô tả</label>
                            <textarea id="description" name="description"
                                    class="outline-0 p-2 block mt-2 w-full rounded-md border shadow-md focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-50  disabled:cursor-not-allowed disabled:bg-gray-50"
                                    rows="3" placeholder="Hãy thêm mô tả ..."></textarea>
                        </div>

                        <div class="md:col-span-5">
                            <label for="image" class="font-semibold text-[16px]">Chọn hình ảnh: </label>
                            <input type="file" name="image" id="image" value=""
                                class="font-bold mt-2"
                                placeholder="Nhập số lượng" />
                        </div>

                        <div class="md:col-span-5 text-center w-full">
                            <div class="w-full">
                                <button type="submit"
                                    class="bg-[#333f48] hover:bg-[#A0522D] text-white font-bold py-3 px-4 rounded">
                                    Chỉnh sửa sản phẩm
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>