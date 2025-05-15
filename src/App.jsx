import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './feature/Login/LoginUI.jsx'; // Đường dẫn đến component Login
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Component Home cho trang chính (nội dung gốc của App.jsx)
function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Link to="/login">Go to Login</Link> {/* Liên kết để quay lại trang đăng nhập */}
    </>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Cập nhật trạng thái khi đăng nhập thành công
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Trang đăng nhập */}
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
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