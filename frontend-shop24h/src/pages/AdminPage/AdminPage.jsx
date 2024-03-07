import { ColorModeContext, useMode } from '../../theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './global/Topbar';
import Sidebar from './global/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AdminPage = () => {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();
  const storageUser = JSON.parse(sessionStorage.getItem('user'));

  // If not Admin -> Back to Login Page
  useEffect(() => {
    if (!storageUser) {
      navigate('/login');
    } else if (!storageUser.user.isAdmin) {
      navigate('/login')
    }
  }, [])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminPage;