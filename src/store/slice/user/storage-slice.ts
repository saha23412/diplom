import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../../global-types/storage-types';
import getStorageApi from '../../../api/rest/storage/get-storage';
import getMyStorageApi from '../../../api/rest/storage/get-my-storage';

interface StorageState {
  storage: Storage[] | null;
  'user-storage': Storage[] | null;
  loading: boolean;
  error: string;
}

// export const createUser = createAsyncThunk<
//   boolean,
//   User,
//   { rejectValue: string }
// >('user/createUser', async function (user: User, { rejectWithValue }) {
//   const response = await createUserApi(user);
//   if (response.statusText !== 'OK') {
//     return rejectWithValue('Error');
//   }
//   return true;
// });

export const getStorage = createAsyncThunk<
  Storage[],
  undefined,
  { rejectValue: string }
>('storage/getStorage', async function (_, { rejectWithValue }) {
  const response = await getStorageApi();
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return response.data as Storage[];
});

export const getMyStorage = createAsyncThunk<
  Storage[],
  string,
  { rejectValue: string }
>('storage/getMyStorage', async function (id, { rejectWithValue }) {
  const response = await getMyStorageApi(id);
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return response.data as Storage[];
});

const initialState: StorageState = {
  storage: null,
  'user-storage': null,
  loading: false,
  error: '',
};
export const storageSlice = createSlice({
  name: 'storage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getStorage.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getStorage.fulfilled,
        (state, action: PayloadAction<Storage[]>) => {
          state.loading = false;
          state.storage = action.payload;
        }
      )
      .addCase(getStorage.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка сервера, повторите попытку';
      })
      .addCase(getMyStorage.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(
        getMyStorage.fulfilled,
        (state, action: PayloadAction<Storage[]>) => {
          state.loading = false;
          state['user-storage'] = action.payload;
        }
      )
      .addCase(getMyStorage.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка сервера, повторите попытку';
      });
  },
});

export const { reducer: storageReducer } = storageSlice;
