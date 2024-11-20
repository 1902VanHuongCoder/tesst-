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
import QuanTriVienDangNhap from "@/components/auth/QuanTriVienDangNhap.vue";
import QuanTriVienDangKy from "@/components/auth/QuanTriVienDangKy.vue";
import ThongTinTongQuanCuaThuVien from "@/components/admin/ThongTinTongQuanCuaThuVien.vue";
import DanhSachSach from "@/components/admin/DanhSachSach.vue";
import ThemSach from "@/components/admin/ThemSach.vue";
import DanhSachDocGia from "@/components/admin/DanhSachDocGia.vue";
import ThemDocGia from "@/components/admin/ThemDocGia.vue";
import DanhSachNhanVien from "@/components/admin/DanhSachNhanVien.vue";
import ThemNhanVien from "@/components/admin/ThemNhanVien.vue";
import DanhSachNhaXuatBan from "@/components/admin/DanhSachNhaXuatBan.vue";
import ThemNhaXuatBan from "@/components/admin/ThemNhaXuatBan.vue";
import ThemThongTinMuonSach from "@/components/admin/ThemThongTinMuonSach.vue";
import DanhSachMuonSach from "@/components/admin/DanhSachMuonSach.vue";
import NhanVienDangNhap from "@/components/auth/NhanVienDangNhap.vue";

const routes = [
  {
    path: "/admin/login",
    name: "Trang đăng nhập quản trị viên",
    component: QuanTriVienDangNhap,
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
  // Route này lơi nơi nhân viên dùng để đăng nhập vào hệ thống
  {
    path: "/nhanvien/dangnhap",
    name: "Nhân viên đăng nhập",
    component: NhanVienDangNhap,
  },
  {
    path: "/admin/add_Admin",
    name: "Add_Admin",
    component: Add_Admin,
  },

  // Route để người quản trị viên đăng nhập vào hệ thống
  {
    path: "/quantrivien/dangnhap",
    name: "Quản trị viên đăng nhập",
    component: QuanTriVienDangNhap,
  },

  // Route để người quản trị viên đăng ký tài khoản
  {
    path: "/quantrivien/dangky",
    name: "Quản trị viên đăng ký tài khoản",
    component: QuanTriVienDangKy,
  },

  // Route để người quản trị viên xem thong tin tổng quan của hệ thống
  {
    path: "/quantrivien/tongquan",
    name: "Thông tin tổng quan của hệ thống",
    component: ThongTinTongQuanCuaThuVien,
  },

  // Route để người quản trị viên xem danh sách sách
  {
    path: "/quantrivien/quanlysach",
    name: "Quản lý sách",
    component: DanhSachSach,
  },
  // Route để người quản trị viên thêm sách
  {
    path: "/quantrivien/themsach",
    name: "Thêm sách",
    component: ThemSach,
  },
  // Route để người quản trị viên xem danh sách đọc giả
  {
    path: "/quantrivien/quanlydocgia",
    name: "Quản lý đọc giả",
    component: DanhSachDocGia,
  },
  // Route để người quản trị viên thêm đọc giả
  {
    path: "/quantrivien/themdocgia",
    name: "Thêm đọc giả",
    component: ThemDocGia,
  },

  // Route để người quản trị viên xem danh sach nhân viên
  {
    path: "/quantrivien/quanlynhanvien",
    name: "Quản lý nhân viên",
    component: DanhSachNhanVien,
  },
  // Route để người quản trị viên thêm nhân viên
  {
    path: "/quantrivien/themnhanvien",
    name: "Thêm nhân viên",
    component: ThemNhanVien,
  },
  // Route để người quản trị viên xem danh sách nhà xuất bản
  {
    path: "/quantrivien/quanlynhaxuatban",
    name: "Quản lý thông tin nhà xuất bản",
    component: DanhSachNhaXuatBan,
  },
  // Route để người quản trị viên thêm nhà xuất bản
  {
    path: "/quantrivien/themnhaxuatban",
    name: "thêm nhà xuất bản",
    component: ThemNhaXuatBan,
  },

  // Route để người quản trị viên xem bảng theo dõi mượn sách
  {
    path: "/quantrivien/theodoimuonsach",
    name: "Theo dõi mượn sách",
    component: DanhSachMuonSach,
  },

  // Route để người quản trị viên xem thêm thông tin mượn sách
  {
    path: "/quantrivien/themthongtinmuonsach",
    name: "Thêm thông tin mượn sách",
    component: ThemThongTinMuonSach,
  },

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
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
