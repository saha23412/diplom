import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Storage } from '../../../global-types/storage-types';
import type { RootState } from '../../store-types';
import getStorageApi from '../../../api/rest/storage/get-storage';
import getMyStorageApi from '../../../api/rest/storage/get-my-storage';
import deleteStorageApi from '../../../api/rest/storage/delete-inventort';
import createStorageApi from '../../../api/rest/storage/create-invetory';

interface StorageState {
  storage: Storage[] | null;
  loading: boolean;
  error: string;
}

const initialState: StorageState = {
  storage: null,
  loading: false,
  error: '',
};

export const createInventory = createAsyncThunk<
  Storage | null,
  Omit<Storage, 'id'>,
  { rejectValue: string; state: RootState }
>('storage/createInventory', async (storage, { rejectWithValue, getState }) => {
  const state = getState();
  if (state.storage.storage) {
    const lastInvetoryId =
      state.storage.storage[state.storage.storage.length - 1].id;
    const id = `${+lastInvetoryId + 1}`;
    const response = await createStorageApi({ ...storage, id });
    return { ...storage, id };
  }
  return null;
});

export const deleteMyInventory = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>('storage/deleteMyInventory', async (id, { rejectWithValue }) => {
  const response = await deleteStorageApi(id);
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return id;
});

export const getStorage = createAsyncThunk<
  Storage[],
  undefined,
  { rejectValue: string }
>('storage/getStorage', async (_, { rejectWithValue }) => {
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
>('storage/getMyStorage', async (id, { rejectWithValue }) => {
  const response = await getMyStorageApi(id);
  if (response.statusText !== 'OK') {
    return rejectWithValue('Error');
  }
  return response.data as Storage[];
});

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
          state.storage = action.payload;
        }
      )
      .addCase(getMyStorage.rejected, (state) => {
        state.loading = false;
        state.error = 'Ошибка сервера, повторите попытку';
      })
      .addCase(
        createInventory.fulfilled,
        (state, action: PayloadAction<Storage | null>) => {
          if (action.payload && state.storage) {
            state.storage.push(action.payload);
          }
        }
      )
      .addCase(
        deleteMyInventory.fulfilled,
        (state, action: PayloadAction<string>) => {
          if (state.storage) {
            state.storage = state.storage.filter(
              (inventory) => inventory.id !== action.payload
            );
          }
        }
      );
  },
});

export const { reducer: storageReducer } = storageSlice;
