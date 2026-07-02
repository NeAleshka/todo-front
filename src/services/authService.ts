const API_URL = import.meta.env.VITE_API_URL;

export const checkAuth = async (): Promise<{
  isAuthenticated: boolean;
}> => {
  try {
    const response = await fetch(`${API_URL}/auth/me`, {
      credentials: 'include',
    });
    if (response.ok) {
      return { isAuthenticated: true };
    }
    return { isAuthenticated: false };
  } catch {
    return { isAuthenticated: false };
  }
};

export const authWithLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await fetch(`${API_URL}/auth/signIn`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then((res) => res.status);
};

export const signUp = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return await fetch(`${API_URL}/auth/signUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then((res) => res.status);
};
