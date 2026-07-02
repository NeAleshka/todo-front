import { createLazyRoute } from '@tanstack/react-router';

export const Route = createLazyRoute('/login')({
  component: LoginPage,
});

function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Вход</h1>
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
