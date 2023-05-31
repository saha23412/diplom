import { ReactNode } from 'react';

export interface AuthContextProps {
  children: ReactNode;
}
export type AuthContextType = {
  auth: boolean;
  updateStorageAuth: (newState: boolean) => void;
  getInitialStateAuth: () => boolean;
};
