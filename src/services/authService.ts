export const checkAuth = async (): Promise<{
  isAuthenticated: boolean;
}> => {
  try {
    const response = await fetch('http://localhost:3000/auth/me', {
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
  return await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
    credentials: 'include',
  }).then((res) => res.status);
};
