import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

import Table from './pages/Table';
import Settings from './pages/Settings';
import DnD from './pages/DnD';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <>
      <CssVarsProvider disableTransitionOnChange defaultMode="dark">
        <CssBaseline />
        <GlobalStyles
          styles={{
            ':root': {
              '--Collapsed-breakpoint': '769px',
              '--Cover-width': '40vw',
              '--Form-maxWidth': '700px',
              '--Transition-duration': '0.4s',
            },
          }}
        />
        <ToastContainer autoClose={3000} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Home />}>
                <Route path="/" index element={<Navigate replace to="portfolio" />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="table" element={<Table />} />
                <Route path="dnd" element={<DnD />} />
                <Route path="profile" element={<Profile />} />

                <Route path="settings" element={<Settings />} />
              </Route>
            </Route>
            <Route path="login" element={<SignIn />} />
          </Routes>
        </Suspense>
      </CssVarsProvider>
    </>
  );
}

export default App;
