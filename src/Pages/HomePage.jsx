import React from "react";
import Navbar from "../components/layout/Navbar";
import UsersResults from "../components/users/UsersResults";
import UserSearch from "../components/users/UserSearch";

const HomePage = () => {
  return (
    <>
      <h1 className="center text-3xl font-bold mb-10 text-center">
        Github user finder
      </h1>
      <UserSearch />
      <UsersResults />
    </>
  );
};

export default HomePage;
