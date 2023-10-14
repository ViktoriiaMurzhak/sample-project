import React, { useEffect, useState } from 'react';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Container from '@mui/joy/Container';
import Button from '@mui/joy/Button';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import css from './SignIn.module.css';
import Error from '../../components/Error';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { emailPattern } from '../../utils/patterns';

import { Input } from '@mui/joy';

import { useTranslation } from 'react-i18next';
import ToggleLanguage from '../../components/ToggleLanguage/ToggleLanguage';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { signIn } from '../../redux/auth/operations';
import { getGlobalUser } from '../../redux/auth/selectors';

interface IFormInput {
  email: string;
  password: string;
  multipleErrorInput: string;
}

const SignIn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();
  const { isLoggedIn } = useSelector(getGlobalUser);

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    criteriaMode: 'all',
  });

  useEffect(() => {
    if (isLoggedIn) navigate(`/`);
  }, [isLoggedIn, navigate]);

  const onSubmit = ({ email, password }: { email: string; password: string }) => {
    if (email === 'test@gmail.com' && password === '123456Ab') {
      dispatch(signIn());
    } else {
      toast.error(t('toast_email'));
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Box
        sx={theme => ({
          width:
            'clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)',
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(255 255 255 / 0.6)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box sx={{ position: 'absolute', top: '20px', left: '20px' }}>
          <ToggleLanguage />
        </Box>

        <div className={css.wrapper}>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography
                component="h2"
                sx={{ fontWeight: '700', marginBottom: '20px', fontSize: '32px' }}
              >
                {t('login_header')}
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
                <Input
                  {...register('email', {
                    required: t('validation_required'),
                    pattern: {
                      value: emailPattern,
                      message: t('validation_email'),
                    },
                  })}
                  id="email"
                  name="email"
                  placeholder={t('login_email')}
                  className={css.fullInput}
                  autoComplete="email"
                  autoFocus
                />
                <Error errors={errors} name="email" />
                <div className={css.passWrap}>
                  <Input
                    {...register('password', {
                      required: t('validation_required'),
                    })}
                    name="password"
                    placeholder={t('login_password')}
                    className={css.fullInput}
                    type={(showPassword && 'text') || 'password'}
                    id="password"
                    autoComplete="password"
                  />
                  <Error errors={errors} name="password" />
                  <button className={css.buttonPass} type="button" onClick={toggleShowPassword}>
                    {(showPassword && (
                      <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} />
                    )) || <AiOutlineEye style={{ width: '24px', height: '24px' }} />}
                  </button>
                </div>
                <Button className={css.button} type="submit">
                  {t('login_btn')}
                </Button>
              </form>
              <Typography level="body-xs" sx={{ mt: 1 }}>
                {t('login_help')}
              </Typography>
            </Box>
          </Container>
        </div>
      </Box>
      <Box
        sx={theme => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 'clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
          },
        })}
      />
    </>
  );
};

export default SignIn;
