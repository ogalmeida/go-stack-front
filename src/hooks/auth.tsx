import React, { useContext, createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface AuthCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credencials: AuthCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const userData = localStorage.getItem('@GoBarber:user');
    const token = localStorage.getItem('@GoBarber:token');

    if (userData && token) {
      return {
        token,
        user: JSON.parse(userData),
      };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { user, token } = response.data;

    localStorage.setItem('@GoBarber:user', JSON.stringify(user));
    localStorage.setItem('@GoBarber:token', token);

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@GoBarber:user');
    localStorage.removeItem('@GoBarber:token');
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider!');
  }

  return context;
};

export default AuthProvider;
