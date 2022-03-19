import React from "react";
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

const RepoItem = ({ repo }) => {
  return (
    <div className="mb-2 rounded-md card bg-gray-800 hover:bg-gray-900">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            <FaLink className="inline mr-1" /> {repo.name}
          </a>
        </h3>
        <p className="mb-3">{repo.description}</p>
        <div className="p-0">
          <div className="mr-1 badge badge-info badge-lg">
            <FaEye className="inline mr-1" />
            {repo.watchers_count}
          </div>
          <div className="mr-1 badge badge-success badge-lg">
            <FaStar className="inline mr-1" />
            {repo.stargazers_count}
          </div>
          <div className="mr-1 badge badge-error badge-lg">
            <FaInfo className="inline mr-1" />
            {repo.open_issues}
          </div>
          <div className="mr-1 badge badge-warning badge-lg">
            <FaUtensils className="inline mr-1" />
            {repo.forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
