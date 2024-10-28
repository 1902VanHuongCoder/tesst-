<script setup>
import { ref } from 'vue';
import sidebarAdmin from '@/layouts/admin/sidebarAdmin.vue';
import navbarAdmin from '@/layouts/admin/navbarAdmin.vue';

const users = ref([
    { id: 1, name: "Tô Văn Hưởng", email: "vanhuong@gmail.com", address: "My Tu - Soc Trang", phone: "090-758-3647", day: "30-02-2024",},
]);
</script>

<template>
    <div class="flex h-screen">
        <sidebarAdmin />
        <div class="flex-1 flex flex-col overflow-auto">
            <navbarAdmin />
            <div class="flex-1 bg-gray-100 p-6">
                <div class="text-center py-4">
                    <h2 class="text-[#333] font-bold text-[20px] block lg:hidden">DANH SÁCH NGƯỜI DÙNG</h2>
                </div>
                <div class="overflow-auto">
                    <table class="w-full border-collapse bg-white whitespace-nowrap text-center text-sm text-gray-500">
                        <thead class="bg-[#A0522D] text-white">
                            <tr>
                                <th scope="col" class="px-6 py-4 font-semibold">ID</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Tên người dùng</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Email</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Địa chỉ</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Liên lạc</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Ngày tham gia</th>
                                <th scope="col" class="px-6 py-4 font-semibold">Điều chỉnh</th>
                            </tr>
                        </thead>
                        <tbody class="w-full">
                            <tr class="border-t border-slate-500" v-for="user in users" :key="user.id">
                                <th class="px-6 py-4 font-medium text-gray-900">{{ user.id }}</th>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ user.name }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ user.email
                                    }}</td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ user.address }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{ user.phone }}
                                </td>
                                <td class="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{{
                                    user.day }}</td>
                                <td class="flex justify-center items-center gap-2 px-7 py-7 flex-col">
                                    <form @submit.prevent="deleteProduct(user.id)">
                                        <button type="submit"
                                            class="inline-block bg-[#DC143C] px-4 py-2 font-semibold rounded-md text-[#fff] whitespace-nowrap">Xóa
                                            người dùng</button>
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