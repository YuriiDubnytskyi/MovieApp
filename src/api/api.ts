import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  ENDPOINT_BASE_URL,
  ENDPOINT_MOVIES,
  ENDPOINT_MOVIES_IMPORT,
  ENDPOINT_SESSION,
  ENDPOINT_USERS,
} from '../constants/api';
import { STORAGE_SESSION_TOKEN } from '../constants/storage';
import { showMessage } from 'react-native-flash-message';

export const axiosIntance = axios.create({
  baseURL: ENDPOINT_BASE_URL,
  timeout: 1000,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

axiosIntance.interceptors.response.use(
  response => {
    if (response.data.status === 0 && response.data.error.code) {
      showMessage({
        message: response.data.error.code,
        type: 'danger',
      });
    }

    return response;
  },
  error => Promise.reject(error),
);

axiosIntance.interceptors.request.use(
  async config => {
    const jsonValue = await AsyncStorage.getItem(STORAGE_SESSION_TOKEN);
    if (jsonValue) {
      const token = JSON.parse(jsonValue);
      if (token) {
        config.headers.Authorization = token;
      }
    }

    return config;
  },
  error => Promise.reject(error),
);

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => await axiosIntance.post(ENDPOINT_SESSION, { email, password });

export const register = async ({
  name,
  email,
  password,
  confirmPassword,
}: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}) =>
  await axiosIntance.post(ENDPOINT_USERS, {
    name,
    email,
    password,
    confirmPassword,
  });

export const getMovies = async ({
  limit = 100,
  offset = 0,
  search = '',
}: {
  limit?: number;
  offset?: number;
  search: string;
}) =>
  await axiosIntance.get(
    `${ENDPOINT_MOVIES}?limit=${limit}&offset=${offset}${
      search === '' ? '' : `&search=${search}`
    }`,
  );

export const getMovieById = async (id: string) =>
  await axiosIntance.get(`${ENDPOINT_MOVIES}/${id}`);

export const importMovies = async (file: any) =>
  await axiosIntance.post(ENDPOINT_MOVIES_IMPORT, file);

export const deleteMovie = async (id: string) =>
  await axiosIntance.delete(`${ENDPOINT_MOVIES}/${id}`);

export const createMovie = async ({
  title,
  year,
  format,
  actors,
}: {
  title: string;
  format: string;
  year: string;
  actors: Array<string>;
}) =>
  await axiosIntance.post(ENDPOINT_MOVIES, {
    title,
    year,
    format,
    actors,
  });
