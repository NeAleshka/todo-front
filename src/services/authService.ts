export const checkAuth = async (): Promise<{
  isAuthenticated: boolean;
}> => {
  try {
    const response = await fetch('http://localhost:3000/auth/me', {
      credentials: 'include',
    });
    console.log(response);
    if (response.ok) {
      return { isAuthenticated: true };
    }
    return { isAuthenticated: false };
  } catch {
    return { isAuthenticated: false };
  }
};
