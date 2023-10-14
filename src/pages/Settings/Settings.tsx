import React, { useState } from 'react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Divider,
  Input,
  Stack,
  Typography,
  Grid,
  Box,
} from '@mui/joy';
import useWidth from '../../hooks/useWidth';
import { useForm } from 'react-hook-form';
import { passwordPattern } from '../../utils/patterns';
import Error from '../../components/Error';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import css from './Settings.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getGlobalUser } from '../../redux/auth/selectors';
const Settings = () => {
  const { t } = useTranslation();
  const { isMobile } = useWidth();
  const [showPassword, setShowPassword] = useState(false);
  const { user } = useSelector(getGlobalUser);
  interface IFormInput {
    password: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    criteriaMode: 'all',
  });

  const onSubmit = async () => {
    //todo
  };

  return (
    <Box sx={{ mb: 3, p: 3, width: '100%' }}>
      <Stack spacing={3}>
        <Typography level="h2">{t('settings_header')}</Typography>
        <form>
          <Card>
            <Typography level="h4">{t('settings_checkbox_header')}</Typography>

            <Divider />
            <CardContent>
              <Grid container spacing={14} wrap="wrap">
                <Grid>
                  <Stack spacing={1}>
                    <Typography level="title-lg">{t('settings_checkbox_notifictions')}</Typography>
                    <Stack>
                      <Typography level="body-md">
                        {t('settings_checkbox_telegram', { nickname: user.nickname })}
                      </Typography>
                      <Checkbox defaultChecked />

                      <Typography level="body-md">{t('settings_checkbox_email')}</Typography>
                      <Checkbox defaultChecked />

                      <Typography level="body-md">{t('settings_checkbox_push')}</Typography>
                      <Checkbox style={{ color: 'var(--accent-main)' }} />
                      <Typography level="body-md">{t('settings_checkbox_calls')}</Typography>
                      <Checkbox style={{ color: 'var(--accent-main)' }} defaultChecked />
                    </Stack>
                  </Stack>
                </Grid>
                <Grid>
                  <Stack spacing={1}>
                    <Typography level="title-lg">{t('settings_checkbox_messages')}</Typography>
                    <Stack>
                      <Typography level="body-md">{t('settings_checkbox_email')}</Typography>

                      <Checkbox defaultChecked style={{ color: 'var(--accent-main)' }} />

                      <Typography level="body-md" style={{ color: 'var(--text-main)' }}>
                        {t('settings_checkbox_text')}
                      </Typography>
                      <Checkbox style={{ color: 'var(--accent-main)' }} />
                      <Typography level="body-md">{t('settings_checkbox_calls')}</Typography>
                      <Checkbox style={{ color: 'var(--accent-main)' }} defaultChecked />
                    </Stack>
                  </Stack>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
              <Button onClick={handleSubmit(onSubmit)}>{t('settings_save_btn')}</Button>
            </CardActions>
          </Card>
        </form>
      </Stack>
      <Card
        sx={{
          display: (isMobile && 'block') || 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          p: '20px',
          mt: 3,
        }}
      >
        <Typography level="title-lg">{t('settings_password_label')}</Typography>
        <div className={css.passWrap} style={{ width: (isMobile && '100%') || '60%' }}>
          <Input
            {...register('password', {
              pattern: {
                value: passwordPattern,
                message: t('validation_password'),
              },
              required: t('validation_required'),
              minLength: {
                value: 8,
                message: t('validation_min_password'),
              },
              maxLength: {
                value: 32,
                message: t('validation_max_password'),
              },
            })}
            sx={{ width: '100%' }}
            required
            name="password"
            placeholder={t('settings_password_placeholder')}
            className={css.fullInput}
            type={(showPassword && 'text') || 'password'}
            id="password"
            autoComplete="password"
          />
          <button
            className={css.buttonPass}
            type="button"
            onClick={() => setShowPassword(!showPassword)}
          >
            {(showPassword && (
              <AiOutlineEyeInvisible style={{ width: '24px', height: '24px' }} />
            )) || <AiOutlineEye style={{ width: '24px', height: '24px' }} />}
          </button>
          <Error errors={errors} name="password" />
        </div>

        <Button onClick={handleSubmit(onSubmit)}>{t('settings_save_btn')}</Button>
      </Card>
    </Box>
  );
};

export default Settings;
