import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Link as MuiLink,
} from '@mui/material';
import LockResetIcon from '@mui/icons-material/LockReset';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    if (email.trim() === '') {
      setError('Vui lòng nhập email.');
      return;
    }
    // Giả lập gửi email khôi phục
    setError('');
    setSuccess('Đã gửi liên kết khôi phục đến email của bạn.');
    setTimeout(() => navigate('/login'), 2000);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          bgcolor: 'background.paper',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
          <LockResetIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Quên Mật Khẩu
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
          Nhập email của bạn để nhận liên kết khôi phục mật khẩu.
        </Typography>
        <Box component="form" onSubmit={handleResetPassword} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success.main" variant="body2" sx={{ mt: 1 }}>
              {success}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Gửi Liên Kết Khôi Phục
          </Button>
          <MuiLink component={Link} to="/login" variant="body2" color="primary">
            Quay lại đăng nhập
          </MuiLink>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;