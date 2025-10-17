export const useAuthentication = () => {
  const login = async (email: string, password: string) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  const logout = async () => {
    const response = await fetch("/api/logout", {
      method: "POST",
    });
  };

  const signUp = async (email: string, password: string) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  };

  const getUser = async () => {
    const response = await fetch("/api/user", {
      method: "GET",
    });
    return response.json();
  };

  const resetPassword = async (email: string) => {
    const response = await fetch("/api/resetpassword", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  };

  return { login, logout, signUp, getUser, resetPassword };
};
