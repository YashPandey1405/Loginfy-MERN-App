// src/utils/checkLogin.js
import apiClient from "../../services/apiClient";

const CheckLogin = async () => {
  try {
    const res = await apiClient.isloggedIn();
    return res.loggedIn === true;
  } catch (err) {
    console.error("Error checking login status:", err);
    return false;
  }
};

export default CheckLogin;
