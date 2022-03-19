import React from "react";
import { FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-lg">
          <h1 className="text-4xl mb-3">About this app</h1>
          <p className="text-accent-content mb-2">
            This app helps you to find Github users and displays a lot of useful
            information about each user
          </p>
          <p className="mb-2">Version: 1.0</p>
          <p>
            This project was part of{" "}
            <span className="font-bold">"React Front to Back"</span> online
            course
          </p>
          <div className="flex flex-col items-center my-5">
            <FaRegAddressCard className=" text-5xl" /> <p>Jan Awadallah</p>
            <p>0430430574</p>
            <p>jan.awadallah@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
