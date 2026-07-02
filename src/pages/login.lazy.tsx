import { createLazyRoute, useNavigate } from '@tanstack/react-router';
import { type SyntheticEvent, useState } from 'react';
import { authWithLogin, signUp } from '../services/authService.ts';

export const Route = createLazyRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };
  const [data, setData] = useState<{
    email?: string;
    password?: string;
    name?: string;
  } | null>(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [tab, setTab] = useState<'Login' | 'SignUp' | null>(null);

  const sendAuthData = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    authWithLogin({
      email: data?.email ?? '',
      password: data?.password ?? '',
    }).then((res) => {
      res >= 400 ? setError('Ошибка авторизации') : navigate({ to: '/tasks' });
    });
  };

  const handleSingUp = () => {
    signUp({ email: data?.email ?? '', password: data?.password ?? '' }).then(
      (res) => {
        res === 200
          ? navigate({ to: '/tasks' })
          : setError('Ошибка регистрации');
      },
    );
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Вход</h1>
      <div>
        <input
          type={'checkbox'}
          onChange={() => setTab('Login')}
          checked={tab === 'Login'}
        />
        Войти
      </div>
      <div>
        <input
          type={'checkbox'}
          onChange={() => setTab('SignUp')}
          checked={tab === 'SignUp'}
        />
        Регистрация
      </div>

      {tab && (
        <form onSubmit={sendAuthData}>
          <input
            placeholder={'Email address'}
            value={data?.email ?? ''}
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
          <input
            placeholder={'Password'}
            value={data?.password ?? ''}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {tab === 'SignUp' && (
            <input
              placeholder={'Name'}
              value={data?.name ?? ''}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          )}
          <div>
            {tab && (
              <div>
                {tab === 'Login' ? (
                  <button type="submit">Войти</button>
                ) : (
                  <button onClick={handleSingUp}>Регистрация</button>
                )}
              </div>
            )}
          </div>
        </form>
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button
        onClick={handleGoogleLogin}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4285F4',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Войти через Google
      </button>
    </div>
  );
}
