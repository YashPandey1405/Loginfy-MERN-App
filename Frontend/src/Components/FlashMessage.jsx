import React, { useState } from "react";

function FlashMessage({ message }) {
  const [visible, setVisible] = useState(true);

  if (!message || !visible) return null;

  return (
    <div
      className="alert alert-primary alert-dismissible fade show mt-1"
      role="alert"
    >
      <strong>Welcome To Loginify-MERN! </strong> {message}
      <button
        type="button"
        className="btn-close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      ></button>
    </div>
  );
}

export default FlashMessage;
