import * as React from 'react';
import { Box } from '@mui/material';
import { Header } from '../components/Header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <Box sx={{ minWidth: '99vw'}}>
      <Header />
      <Box component="main" sx={{ mt: 10 }}>
        {children}
      </Box>
    </Box>
  );
}