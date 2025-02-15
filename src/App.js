import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AdminRoutes from './routes/admin';
import SiteRoutes from './routes/user';
import theme from './styles/theme';

function App() {
  return (

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SiteRoutes />
        <AdminRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
