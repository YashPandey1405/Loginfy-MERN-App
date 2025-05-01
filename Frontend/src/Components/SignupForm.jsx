import React, { useState } from "react";

const SignupForm = () => {
  const [username, setUserName] = useState("");
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simple validation
    if (!username || !email || !password) {
      setErrorMessage("Please enter username , email and password.");
    } else {
      setErrorMessage("");
      // Handle login logic here (e.g., API call)
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <div className="container">
      <div className="mt-5">
        <h1 className="mb-4">Sign Up On Our Platform</h1>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="col-12 col-md-6 mb-3">
              <label htmlFor="fullname" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Fullname"
                value={fullname}
                onChange={(e) => setFullName(e.target.value)}
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
          <button
            type="submit"
            className="btn btn-primary mt-3 mb-5"
            disabled={loading}
          >
            {loading ? "Signup...." : "Signup"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
