import React from "react";
import { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // Fetch the profile data as soon as the component is mounted
  useEffect(() => {
    const LogoutUser = async () => {
      try {
        const Message = await apiClient.logout();
        console.log(Message);
        setMessage(Message.message);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setErrorMessage(err.response.data); // This would be error message from the server
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      } finally {
        navigate("/login");
      }
    };

    LogoutUser(); // Call API immediately on mount
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return <div></div>;
}

export default Logout;
