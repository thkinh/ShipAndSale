import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  IconButton,
} from '@mui/material';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Trạng thái ẩn/hiện mật khẩu
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Log username and password to the console
    console.log('Username:', username);
    console.log('Password:', password);
    // Validate input
    if (username.trim() === '' || password.trim() === '') {
      setError('Vui lòng nhập đầy đủ tên người dùng và mật khẩu.');
      return;
    }
    // If valid, trigger onLogin and redirect
    setError('');
    onLogin();
    navigate('/');
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev); // Chuyển đổi trạng thái
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
            type={showPassword ? 'text' : 'password'} // Chuyển đổi type
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
        </Box>
      </Box>
    </Container>
  );
}

export default Login;