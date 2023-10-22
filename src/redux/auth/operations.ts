import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { toast } from 'react-toastify';

export const signIn = createAsyncThunk('auth/signin', async () => {
  try {
    return { isLoggedIn: true, name: 'Viktoria Murzhak' };
  } catch (err: unknown) {
    toast.error(i18n.t('toast_email'), {
      position: 'top-right',
    });
  }
});

export const logOut = () => {
  localStorage.removeItem('persist:auth');
  window.location.reload();
};
