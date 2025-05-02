import React, { useState, useEffect } from "react";
import apiClient from "../../services/apiClient";
import FlashMessage from "./FlashMessage";
import ErrorMessage from "./ErrorMessage";

function Profile() {
  const [profile, setProfile] = useState(null);
  const [flashMessage, setFlashMessage] = useState("GOAT");
  const [errorMessage, setErrorMessage] = useState("");

  // window.location.reload();
  // Fetch the profile data as soon as the component is mounted
  useEffect(() => {
    const getData = async () => {
      try {
        // Check if the page has already been refreshed
        if (!localStorage.getItem("refreshed")) {
          localStorage.setItem("refreshed", "true");
          window.location.reload(); // Refresh the page once
        }

        const ProfilesData = await apiClient.getProfiles();
        setProfile(ProfilesData);
        setFlashMessage(ProfilesData.flashMessage);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setErrorMessage(err.response.data); // This would be error message from the server
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
      }
    };

    getData(); // Call API immediately on mount
  }, []); // Empty dependency array ensures it runs only once when component mounts

  return (
    <div className="container mt-3">
      <FlashMessage message={flashMessage} />
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1">
        {profile?.user?.map((user) => (
          <div className="col mb-5" key={user._id}>
            <div
              className="card listing-card"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              {/* User Image */}
              <img
                src={user.image.url}
                className="card-img-top"
                alt="User"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />

              <div className="card-body mt-1">
                {/* User Details */}
                <h5 className="card-title">Welcome, {user.fullname}</h5>
                <p className="card-text">
                  You're now a valued member of our platform!
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Your UserId:</strong> {user._id}
                  </li>
                  <li className="list-group-item">
                    <strong>Your UserName:</strong> {user.username}
                  </li>
                  <li className="list-group-item">
                    <strong>Your Email:</strong> {user.email}
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-2">
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        ))}
        {profile?.user?.map((user) => (
          <div className="col mb-5" key={user._id}>
            <div
              className="card listing-card"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              {/* User Image */}
              <img
                src={user.image.url}
                className="card-img-top"
                alt="User"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />

              <div className="card-body mt-1">
                {/* User Details */}
                <h5 className="card-title">Welcome, {user.fullname}</h5>
                <p className="card-text">
                  You're now a valued member of our platform!
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Your UserId:</strong> {user._id}
                  </li>
                  <li className="list-group-item">
                    <strong>Your UserName:</strong> {user.username}
                  </li>
                  <li className="list-group-item">
                    <strong>Your Email:</strong> {user.email}
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-2">
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        ))}
        {profile?.user?.map((user) => (
          <div className="col mb-5" key={user._id}>
            <div
              className="card listing-card"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
            >
              {/* User Image */}
              <img
                src={user.image.url}
                className="card-img-top"
                alt="User"
                style={{ width: "100%", height: "250px", objectFit: "cover" }}
              />

              <div className="card-body mt-1">
                {/* User Details */}
                <h5 className="card-title">Welcome, {user.fullname}</h5>
                <p className="card-text">
                  You're now a valued member of our platform!
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <strong>Your UserId:</strong> {user._id}
                  </li>
                  <li className="list-group-item">
                    <strong>Your UserName:</strong> {user.username}
                  </li>
                  <li className="list-group-item">
                    <strong>Your Email:</strong> {user.email}
                  </li>
                </ul>
                <a href="#" className="btn btn-primary mt-2">
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
