import axios from "axios";
import { useState } from "react";
export function useLogin() {
  const [login, setLogin] = useState({ user: {}, status: false });
  const getUser = () => {
    return axios.get("api/users/2").then((response) => {
      const user = response.data.user;
      const status = true;
      setLogin((prev) => ({ ...prev, user, status }));
    });
  };
  const logOut = () => {
    const user = {};
    const status = false;
    setLogin((prev) => ({ ...prev, user, status }));
    return;
  };
  return {
    login,
    getUser,
    logOut,
  };
}
