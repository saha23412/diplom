import { createContext, useCallback, useMemo, useState } from 'react';
import { AuthContextProps, AuthContextType } from './auth-context-types';

export const AuthContext = createContext<AuthContextType>({
  auth: false,
  updateStorageAuth: () => undefined,
  getInitialStateAuth: () => false,
});

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const getInitialStateAuth = useCallback((): boolean => {
    const auth = localStorage.getItem('auth');
    return auth === 'true';
  }, []);
  const [auth, setAuth] = useState<boolean>(getInitialStateAuth());
  const updateStorageAuth = useCallback((newState: boolean) => {
    localStorage.setItem('auth', JSON.stringify(newState));
    setAuth(newState);
  }, []);

  const AuthBaseProvider = useMemo(
    () => ({ auth, updateStorageAuth, getInitialStateAuth }),
    [auth, updateStorageAuth, getInitialStateAuth]
  );
  return (
    <AuthContext.Provider value={AuthBaseProvider}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
