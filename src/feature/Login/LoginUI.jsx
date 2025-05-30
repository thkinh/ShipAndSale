import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
  Divider,
} from '@mui/material';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if (username.trim() === '' || password.trim() === '') {
      setError('Vui lòng nhập đầy đủ tên người dùng và mật khẩu.');
      return;
    }
    setError('');
    onLogin();
    navigate('/');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Chuyển hướng trực tiếp về Home khi nhấn Google/Facebook
  const handleGoogleLogin = () => {
    onLogin();
    navigate('/');
  };

  const handleFacebookLogin = () => {
    onLogin();
    navigate('/');
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
          <LockOutlineIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng Nhập
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Tên người dùng hoặc Email"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Mật khẩu"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Đăng Nhập
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Link to="/forgot-password" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="primary">
                Quên mật khẩu?
              </Typography>
            </Link>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              <Typography variant="body2" color="primary">
                Chưa có tài khoản? Đăng ký
              </Typography>
            </Link>
          </Box>
          <Divider sx={{ my: 2 }}>Hoặc</Divider>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleGoogleLogin}
            sx={{ mb: 1 }}
          >
            Đăng nhập bằng Google
          </Button>
          <Button
            fullWidth
            variant="outlined"
            startIcon={<FacebookIcon />}
            onClick={handleFacebookLogin}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;