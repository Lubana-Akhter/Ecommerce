import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Menu from "./components/nav/Menu";

import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/routes/PrivateRoute";
import AdminRoute from "./components/routes/AdminRoute";
import AdminCategory from "./pages/admin/Category";
import AdminProduct from "./pages/admin/Product";
import AdminProducts from "./pages/admin/Products";
import AdminProductUpdate from "./pages/admin/ProductUpdate";
import AdminDashboard from "./pages/admin/Dashboard";
import Login from "./pages/auth/Login";
import UserProfile from "./pages/user/Profile";
import UserOrders from "./pages/user/Orders";
import AdminOrders from "./pages/admin/Orders";

const PageNotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      404 | Page not found
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/search" element={<Search />} />
          <Route path="/product/:slug" element={<ProductView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            <Route path="user/profile" element={<UserProfile />} />
            <Route path="user/orders" element={<UserOrders />} />
          </Route>

          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="admin/category" element={<AdminCategory />} />
            <Route path="admin/product" element={<AdminProduct />} />
            <Route path="admin/products" element={<AdminProducts />} />
            <Route
              path="admin/product/update/:slug"
              element={<AdminProductUpdate />}
            />
            <Route path="admin/orders" element={<AdminOrders />} />
          </Route>
          <Route path="*" element={<PageNotFound />} replace />
        </Routes>
      </BrowserRouter>
    </div>

  );
}
export default App;