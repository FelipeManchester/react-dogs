import { useCallback, useEffect, useState } from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context';

export const UserStorage = ({ children }) => {
  const [data, setData] = useState(null);
  // null = token salvo ainda sendo validado
  const [login, setLogin] = useState(() =>
    window.localStorage.getItem('token') ? null : false,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const userLogout = useCallback(async function userLogout() {
    setData(null);
    setError(null);
    setLoading(false);
    setLogin(false);

    window.localStorage.removeItem('token');
  }, []);

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);

      if (!response.ok) throw new Error('Usuário ou senha inválidos.');

      const { token } = await response.json();
      window.localStorage.setItem('token', token);

      await getUser(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);

          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');

          await getUser(token);
        } catch (error) {
          setError(error.message);
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }

    autoLogin();
  }, [userLogout]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, loading, login }}
    >
      {children}
    </UserContext.Provider>
  );
};
