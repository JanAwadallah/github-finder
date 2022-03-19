import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="hero">
      <div className="hero-content ">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl mb-3">Ooops!</h1>
          <p className="text-accent-content mb-2">404 - Something went wrong</p>
          <p className="mb-2">This page can not be found</p>

          <div className="btn btn-ghost">
            <Link to="/" className="font-bold">
              <FaHome className="inline" /> Back to Home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
