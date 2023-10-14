import { toast } from 'react-toastify';
import api from './axiosConfig';
import { AxiosError } from 'axios';
import i18n from 'i18next';

export const getAll = async () => {
  try {
    const { data } = await api.get(`https://jsonplaceholder.typicode.com/users`);

    return data;
  } catch {
    toast.error(i18n.t('toast_getAllTrans'), {
      position: 'top-right',
    });
  }
};

export const getAllPhotos = async () => {
  try {
    const { data } = await api.get(`https://api.pexels.com/v1/search?query=nature&per_page=10`, {
      headers: {
        Authorization: 'XvEvBuOYbL3HQjkUzq3yTOwMr5fYorPP4TYH7qxboGmmKW2ALQ4adJIe',
      },
    });

    return data;
  } catch {
    toast.error(i18n.t('toast_getAllTrans'), {
      position: 'top-right',
    });
  }
};

export const updateTrans = async (
  notif_id: number,
  limit: number,
  id: number,
  session: string,
  user_id: number,
  amount: number
) => {
  try {
    const { data } = await api.post(`notification/confirm/${notif_id}`, {
      card_id: id,
      limit,
      session,
      user_id,
      amount,
    });

    return data;
  } catch (err: unknown) {
    toast.error(i18n.t('toast_updateTrans'), {
      position: 'top-right',
    });
  }
};

export const addNewCard = async (
  cardNumber: string | number | readonly string[],
  bankId: number,
  isActive: boolean,
  userId: number,

  label: string,
  daily_limit: number,
  month_limit: number
) => {
  try {
    const { data } = await api.post(`cards`, {
      card_number: cardNumber,
      bank_id: bankId,
      is_active: isActive,
      user_id: userId,

      label,
      dailyLimit: daily_limit,
      monthly_limit: month_limit,
    });

    return data;
  } catch (err: unknown) {
    const error: AxiosError<unknown> = err as AxiosError;
    if (error.response?.status === 409) {
      toast.error(i18n.t('toast_addCard_conflict'), {
        position: 'top-right',
      });
    }
    toast.error(i18n.t('toast_addCard'), {
      position: 'top-right',
    });
  }
};

export const updateCard = async (
  id: number,
  card_balance: number,
  is_active: boolean,
  user_id: number
) => {
  try {
    const { data } = await api.patch(`cards/${id}`, {
      card_balance,
      is_active,
      user_id,
    });

    return data;
  } catch {
    toast.error(i18n.t('toast_updateCard'), {
      position: 'top-right',
    });
  }
};
export const updateCardAll = async (card_id: readonly number[], status: boolean) => {
  try {
    const { data } = await api.post(`cards/updateCard`, {
      card_id,
      status,
    });

    return data;
  } catch {
    toast.error(i18n.t('toast_updateCard'), {
      position: 'top-right',
    });
  }
};

export const updateCardActive = async (is_active: boolean, card_id: number) => {
  try {
    const { data } = await api.patch(`cards/statusUpdate/${card_id}`, {
      is_active,
    });

    return data;
  } catch {
    toast.error(i18n.t('toast_updateCard'), {
      position: 'top-right',
    });
  }
};

export const deleteCard = async (id: number) => {
  try {
    const { data } = await api.delete(`cards/${id}`);

    return data;
  } catch {
    toast.error(i18n.t('toast_deleteCard'), {
      position: 'top-right',
    });
  }
};

export const getAllBanks = async () => {
  try {
    const { data } = await api.get('banks');

    return data;
  } catch {
    toast.error(i18n.t('toast_getAllBanks'), {
      position: 'top-right',
    });
  }
};

export const getAllTags = async () => {
  try {
    const { data } = await api.get('cards/getTags');

    return data;
  } catch {
    toast.error(i18n.t('toast_getAllBanks'), {
      position: 'top-right',
    });
  }
};

export const getCourse = async () => {
  try {
    const { data } = await api.get('course/fetchData');

    return data;
  } catch {
    toast.error(i18n.t('toast_getAllBanks'), {
      position: 'top-right',
    });
  }
};
