import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Error from './pages/Error';
import DeleteProduct from "./components/DeleteProduct";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/new" element={<AddProduct />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="products/:id/edit" element={<EditProduct />} />
          <Route path="products/:id/delete" element={<DeleteProduct />} />
        </Route>
        <Route path="auth/login" element={<Login />} />
        <Route path="auth/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}