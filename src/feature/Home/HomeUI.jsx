import { Link } from 'react-router-dom';
import { IconButton, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function HomeUI() {
  return (
    <div className="home-container" style={{ position: 'relative' }}>
      <h1 className="home-title">Chào mừng đến với ứng dụng của bạn</h1>
      <p className="home-description">
        Đây là trang chính. Bạn đã đăng nhập thành công!
      </p>
      {/* Nút AccountCircleIcon được di chuyển ra ngoài Box và định vị ở góc trái */}
      <IconButton
        component={Link}
        to="/account"
        variant="outlined"
        sx={{
          position: 'absolute',
          top: '-410px',
          right: '-490px',
          borderRadius: '20px',
          textTransform: 'none',
          padding: '8px 16px',
          borderColor: '#dadce0',
          color: '#202124',
          '&:hover': {
            backgroundColor: '#f1f3f4',
            borderColor: '#dadce0',
          },
        }}
      >
        <AccountCircleIcon sx={{ fontSize: '40px' }} />
      </IconButton>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        <Link to="/login" className="home-button">
          Quay lại trang đăng nhập
        </Link>
      </Box>
    </div>
  );
}

export default HomeUI;