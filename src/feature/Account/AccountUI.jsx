import { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
  Link as MuiLink,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

function AccountUI() {
  // State giả lập dữ liệu người dùng (sẽ thay bằng API)
  const [user] = useState({
    name: 'Tên người dùng',
    email: 'Email',
  });

  // Nơi xử lý lấy dữ liệu từ API
  useEffect(() => {
    // TODO: Gọi API để lấy thông tin người dùng
    // Ví dụ:
    // fetch('/api/user', {
    //   headers: { Authorization: `Bearer ${token}` },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setUser(data))
    //   .catch((error) => console.error('Error fetching user:', error));
  }, []);

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
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', width: 56, height: 56 }}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h5">
          Thông Tin Người Dùng
        </Typography>
        <List sx={{ width: '100%', mt: 2 }}>
          <ListItem>
            <ListItemText primary="Họ và tên" secondary={user.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
        </List>
        <Button
          component={Link}
          to="/"
          variant="contained"
          sx={{ mt: 3, mb: 2, width: '100%' }}
        >
          Quay lại trang chính
        </Button>
        {/* <MuiLink component={Link} to="/login" variant="body2" color="primary">
          Đăng xuất
        </MuiLink> */}
      </Box>
    </Container>
  );
}

export default AccountUI;