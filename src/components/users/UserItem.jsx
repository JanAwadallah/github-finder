import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHandPointLeft, FaHandPointRight } from "react-icons/fa";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card compact side bg-base-100 shadow-md">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img src={avatar_url} alt="Profile Pic" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title mb-3">{login.toUpperCase()}</h2>
          <Link
            className="text-base-content text-opacity-40 "
            to={`/user/${login}`}
          >
            <div className="flex">
              <FaHandPointRight className="mr-2" /> Vist Profile
              <FaHandPointLeft className="ml-2" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
