import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../../global-types/user-types';
import getUsersApi from '../../../api/rest/user/get-users';
import createUserApi from '../../../api/rest/user/create-user';
import getUserByIdApi from '../../../api/rest/user/get-user-id';

interface UserState {
  user_id: string;
  auth: boolean;
  currentUser: Omit<User, 'user_id'> | null;
  users: null | User[];
  error: string;
  loading: boolean;
}

export const createUser = createAsyncThunk<
  boolean,
  User,
  { rejectValue: string }
>('user/createUser', async function (user: User, { rejectWithValue }) {
  const response = await createUserApi(user);
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return true;
});

export const getUsers = createAsyncThunk<
  User[],
  undefined,
  { rejectValue: string }
>('user/getUser', async function (_, { rejectWithValue }) {
  const response = await getUsersApi();
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return response.data as User[];
});

export const getUserById = createAsyncThunk<
  User,
  string,
  { rejectValue: string }
>('user/getUserById', async function (id, { rejectWithValue }) {
  const response = await getUserByIdApi(id);
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return response.data as User;
});

const initialState: UserState = {
  user_id: '',
  auth: false,
  currentUser: null,
  users: null,
  error: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authUser(state) {
      state.auth = true;
    },
    exitAuthUser(state) {
      state.auth = false;
    },
    addUserId(state, action: PayloadAction<string>) {
      state.user_id = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка сервера, повторите попытку';
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(getUserById.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка сервера, повторите попытку';
      })
      .addCase(getUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.currentUser = action.payload;
      });
  },
});

export const {
  reducer: userReducer,
  actions: { authUser, exitAuthUser, addUserId },
} = userSlice;
