import { useRouter } from 'next/router';
import { parseCookies, setCookie } from 'nookies';
import { createContext, useEffect, useState } from 'react';
import { api } from '../api/axios';

type UserType = {
  name: string;
  email: string;
  id: string;
};

type ErrorType = {
  Error: string;
};

type AuthContextProps = {
  user: UserType | null;
  singIn: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  isAuthenticated: boolean;
  error: ErrorType | null;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: any) {
  const [user, setUser] = useState<UserType | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);
  const { push } = useRouter();
  const { authUser } = parseCookies(undefined);

  useEffect(() => {
    if (authUser) {
      api.get('/user/recoveryUser').then((response) => {
        setUser(response.data.user);
      });
    }
  }, []);

  const isAuthenticated = !!user;

  function singIn(email: string, password: string) {
    api
      .post('/user/login', { email, password })
      .then((response) => {
        setCookie(undefined, 'authUser', response.data.token, {
          maxAge: 30 * 24 * 60 * 60,
        });

        api.defaults.headers['authorization'] = response.data.token;
        setUser(response.data.user);
        setError(null);
        push('/');
      })
      .catch((error) => {
        setError(error.response.data);
      });
  }

  async function register(name: string, email: string, password: string) {
    api
      .post('/user/create', { name, email, password })
      .then((response) => {
        setCookie(undefined, 'authUser', response.data.token, {
          maxAge: 30 * 24 * 60 * 60,
        });

        api.defaults.headers['authorization'] = response.data.token;
        setUser(response.data.user);
        setError(null);
        push('/');
      })
      .catch((error) => {
        setError(error.response.data);
      });
  }

  return (
    <AuthContext.Provider
      value={{ user, error, singIn, register, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}
