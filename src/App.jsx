import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './feature/Login/LoginUI.jsx';
import Register from './feature/Register/RegisterUI.jsx';
import ForgotPassword from './feature/ForgetPassword/ForgetPassowdUI.jsx';
import Home from './feature/Home/HomeUI.jsx';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cập nhật trạng thái khi đăng nhập thành công
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Trang đăng nhập */}
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Trang đăng ký */}
        <Route path="/register" element={<Register />} />
        {/* Trang quên mật khẩu */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* Trang chính */}
        <Route
          path="/"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
        />
        {/* Chuyển hướng mặc định */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;