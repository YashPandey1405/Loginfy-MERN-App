import React, { useState } from "react";

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simple validation
    if (!email || !password) {
      setErrorMessage("Please enter both email and password.");
    } else {
      setErrorMessage("");
      // Handle login logic here (e.g., API call)
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="mb-4">Login On Our Platform</h1>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="name" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Login...." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
