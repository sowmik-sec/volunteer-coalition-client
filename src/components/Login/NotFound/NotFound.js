import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Import the CSS file for styling

function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Oops!</h1>
      <p className="not-found-text">
        The page you're looking for could not be found.
      </p>
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        className="not-found-image"
      />
      <Link to="/" className="not-found-link">
        Go back to the homepage
      </Link>
    </div>
  );
}

export default NotFound;
