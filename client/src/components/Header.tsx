import { Box } from '@mui/material';
import { Topbar } from './Header/Topbar';
import { Navbar } from './Header/Navbar';

export function Header() {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        bgcolor: 'background.paper',
        boxShadow: 1,
      }}
    >
      <Topbar />
      <Navbar />
    </Box>
  );
}
