import { Link } from 'react-router-dom';

function HomeUI() {
  return (
    <div className="home-container">
      <h1 className="home-title">Chào mừng đến với ứng dụng của bạn</h1>
      <p className="home-description">
        Đây là trang chính. Bạn đã đăng nhập thành công!
      </p>
      <Link to="/login" className="home-button">
        Quay lại trang đăng nhập
      </Link>
    </div>
  );
}

export default HomeUI;