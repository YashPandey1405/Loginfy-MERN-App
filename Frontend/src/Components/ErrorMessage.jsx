import React, { useState } from "react";

function ErrorMessage({ message }) {
  const [visible, setVisible] = useState(true);

  if (!message || !visible) return null;

  return (
    <div
      className="alert alert-danger alert-dismissible fade show mt-1"
      role="alert"
    >
      <strong>{message} </strong>
      <button
        type="button"
        className="btn-close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      ></button>
    </div>
  );
}

export default ErrorMessage;
