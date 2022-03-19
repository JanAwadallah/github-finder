import React, { useContext } from "react";
import { RingLoader } from "react-spinners";
import UserItem from "./UserItem";
import GithubContext from "../../context/githup/GithubContext";

const UsersResults = () => {
  const { users, totalCount, loading } = useContext(GithubContext);

  return (
    <div className=" container pb-5">
      {!loading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
          {totalCount === 0 ? (
            <h1>Sorry! No results found matching your search</h1>
          ) : (
            users.map((user) => <UserItem key={user.id} user={user} />)
          )}
        </div>
      ) : (
        <div className="flex justify-center">
          <RingLoader size={150} color="green" />
        </div>
      )}
    </div>
  );
};

export default UsersResults;
