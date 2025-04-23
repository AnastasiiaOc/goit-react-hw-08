
// Додайте у файл redux/auth/operations.js операції, оголошені за допомогою createAsyncThunk, для роботи з користувачем:
// register - для реєстрації нового користувача. Базовий тип екшену "auth/register". Використовується у компоненті RegistrationForm на сторінці реєстрації.
// login - для логіну існуючого користувача. Базовий тип екшену "auth/login". Використовується у компоненті LoginForm на сторінці логіну.
// logout - для виходу з додатка. Базовий тип екшену "auth/logout". Використовується у компоненті UserMenu у шапці додатку.
// refreshUser - оновлення користувача за токеном. Базовий тип екшену "auth/refresh". Використовується у компоненті App під час його монтування.
// Токен авторизованого користувача потрібно зберігати в локальному сховищі за допомогою бібліотеки persist.
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

  export const logout = createAsyncThunk('auth/logout', async () => {
    await axios.post('/users/logout');
    setAuthHeader('');
  });

//   export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//     await axios.post('/users/logout');
//     setAuthHeader('');
//   });
 
export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
      try {
        const reduxState = thunkAPI.getState();
        setAuthHeader(`Bearer ${reduxState.auth.token}`);
        const repsonse = await axios.get('/users/current'); // change for our API
        return repsonse.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

// ========================================================

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const setAuthHeader = value => {
//   axios.defaults.headers.common.Authorization = value;
// };

// export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
//   try {
//     const repsonse = await axios.post('/users/signup', credentials);
//     setAuthHeader(`Bearer ${repsonse.data.token}`);
//     return repsonse.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const logIn = createAsyncThunk('auth/login', async (creditials, thunkAPI) => {
//   try {
//     const repsonse = await axios.post('/users/login', creditials);
//     setAuthHeader(`Bearer ${repsonse.data.token}`);
//     return repsonse.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   await axios.post('/users/logout');
//   setAuthHeader('');
// });

// export const refreshUser = createAsyncThunk(
//   'auth/refreshUser',
//   async (_, thunkAPI) => {
//     try {
//       const reduxState = thunkAPI.getState();
//       setAuthHeader(`Bearer ${reduxState.auth.token}`);
//       const repsonse = await axios.get('/users/current');
//       return repsonse.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   },
//   {
//     condition: (_, thunkAPI) => {
//       const reduxState = thunkAPI.getState();
//       reduxState.auth.token !== null;
//     },
//   }
// );