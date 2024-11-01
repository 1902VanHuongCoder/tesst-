import { createRouter, createWebHistory } from "vue-router";
import Home_Page from "@/components/client/Home_Page.vue";
import Details_Product from "@/components/client/Details_Product.vue";
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";
import Shopping_cart from "@/components/client/Shopping_cart.vue";
import Book_History from "@/components/client/Book_History.vue";
import Order from "@/components/client/Order.vue";
import Info from "@/components/client/Info.vue";
import Edit_Info from "@/components/client/Edit_Info.vue";
import Add_Admin from "@/components/auth/Add_Admin.vue";
import Admin_Dashboard from "@/components/admin/Admin_Dashboard.vue";
import Admin_Users from "@/components/admin/Admin_Users.vue";
import Admin_AddProduct from "@/components/admin/Admin_AddProduct.vue";
import Admin_EditProduct from "@/components/admin/Admin_EditProduct.vue";
import Admin_OrdersList from "@/components/admin/Admin_OrdersList.vue";
import Admin_AddNhaXuatBan from "@/components/admin/Admin_AddNhaXuatBan.vue";
import Admin_AddNhanVien from "@/components/admin/Admin_AddNhanVien.vue";
import Admin_TheoDoiMuonSach from "@/components/admin/Admin_TheoDoiMuonSach.vue";
import Admin_AddDocGia from "@/components/admin/Admin_AddDocGia.vue";
import Staff_Login from "@/components/auth/Staff_Login.vue";
import QuanTriVien_Login from "@/components/auth/QuanTriVien_Login.vue";
import QuanTriVien_Signup from "@/components/auth/QuanTriVien_Signup.vue";
import Sach_List from "@/components/admin/Sach_List.vue";
import NhanVien_List from "@/components/admin/NhanVien_List.vue";
import DocGia_List from "@/components/admin/DocGia_List.vue";
import NhaXuatBan_List from "@/components/admin/NhaXuatBan_List.vue";
import TheoDoiMuonSach_List from "@/components/admin/TheoDoiMuonSach_List.vue";

const routes = [
  {
    path: "/",
    name: "Home_Page",
    component: Home_Page,
  },
  {
    path: "/details",
    name: "Details_Product",
    component: Details_Product,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/shopping_cart",
    name: "Shopping_cart",
    component: Shopping_cart,
  },
  {
    path: "/Book_history",
    name: "Book_History",
    component: Book_History,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/info",
    name: "Info",
    component: Info,
  },
  {
    path: "/edit_Info",
    name: "Edit_Info",
    component: Edit_Info,
  },
  {
    path: "/staff_login",
    name: "Staff_login",
    component: Staff_Login,
  },
  {
    path: "/admin/add_Admin",
    name: "Add_Admin",
    component: Add_Admin,
  },
  {
    path: "/admin/admin_Dashboard",
    name: "Admin_Dashboard",
    component: Admin_Dashboard,
  },
  {
    path: "/admin/admin_Users",
    name: "Admin_Users",
    component: Admin_Users,
  },
  {
    path: "/admin/admin_AddProduct",
    name: "Admin_AddProduct",
    component: Admin_AddProduct,
  },
  {
    path: "/admin/admin_AddNhaXuatBan",
    name: "Admin_AddNhaXuatBan",
    component: Admin_AddNhaXuatBan,
  },
  {
    path: "/admin/admin_AddNhanVien",
    name: "admin_AddNhanVien",
    component: Admin_AddNhanVien,
  },
  {
    path: "/admin/admin_TheoDoiMuonSach",
    name: "admin_TheoDoiMuonSach",
    component: Admin_TheoDoiMuonSach,
  },

  {
    path: "/admin/admin_AddDocGia",
    name: "admin_AddDocGia",
    component: Admin_AddDocGia,
  },

  {
    path: "/admin/login",
    name: "admin_login",
    component: QuanTriVien_Login,
  },
  {
    path: "/admin/signup",
    name: "admin_signup",
    component: QuanTriVien_Signup,
  },
  {
    path: "/admin/sachList",
    name: "sach_list",
    component: Sach_List,
  },

  {
    path: "/admin/nhanvienList",
    name: "nhanvien_list",
    component: NhanVien_List,
  },

  {
    path: "/admin/docgiaList",
    name: "docgia_list",
    component: DocGia_List,
  },
  {
    path: "/admin/nhaxuatbanList",
    name: "nhaxuatban_list",
    component: NhaXuatBan_List,
  },
  {
    path: "/admin/theodoimuonsachList",
    name: "theodoimuonsach_list",
    component: TheoDoiMuonSach_List,
  },

  {
    path: "/admin/admin_EditProduct",
    name: "Admin_EditProduct",
    component: Admin_EditProduct,
  },
  {
    path: "/admin/admin_OrdersList",
    name: "Admin_OrdersList",
    component: Admin_OrdersList,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
