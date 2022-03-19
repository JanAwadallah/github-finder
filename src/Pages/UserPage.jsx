import React, { useContext, useEffect } from "react";
import {
  FaArrowLeft,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import RepoItem from "../components/RepoItem";
import GithubContext from "../context/githup/GithubContext";
import { getUser } from "../context/githup/gitubActions";

const UserPage = () => {
  const { login } = useParams();
  const { user, dispatch, loading, repos } = useContext(GithubContext);

  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
    });
    const fetchUser = async () => {
      const user = await getUser(login);
      dispatch({
        type: "GET_USER",
        payload: { user: user.data, latestRepos: user.latestRepos },
      });
    };
    fetchUser();
  }, [dispatch, login]);

  if (loading) {
    return (
      <div className="flex justify-center">
        <RingLoader size={150} color="green" />
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        {user.name && (
          <h1 className="center text-3xl font-bold mb-10 text-center">
            {`${user.name.split(" ", 1)}'s`} Github profile summary
          </h1>
        )}
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost mb-2">
            <FaArrowLeft /> Back to search
          </Link>
        </div>
        <div
          style={{ caretColor: "transparent" }}
          className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mb-8 md:gap-8"
        >
          <div className="custum-card-image mb-6 md:mb-0">
            <div
              style={{ position: "relative" }}
              className="card image-full rounded-full shadow-xl"
            >
              <figure>
                <img src={user.avatar_url} alt="" className="rounded-full" />
              </figure>
              <div
                style={{ position: "absolute", bottom: "0", left: "0" }}
                className="card-body justify-end p-2 text-center w-full"
              >
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p>{user.login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2 ml-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {user.name}
                <div className="badge ml-2 mr-1 p-2 badge-xs badge-success ">
                  {user.type}
                </div>
                {user.hireable && (
                  <div className="badge mx-1 p-2 badge-xs badge-info">
                    Hireable
                  </div>
                )}
              </h1>
            </div>

            <p>{user.bio}</p>
            <div className="mt-4 card-actions">
              <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Visit Github Profile
              </a>
            </div>
            <div className="w-full rounded shadow-md bg-base-100 stats">
              {user.location && (
                <div className="stat px-3">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-sm stat-value">{user.location}</div>
                </div>
              )}
              {user.blog && (
                <div className="stat px-3">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-sm stat-value">
                    <a
                      href={`https://${user.blog}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.blog}
                    </a>
                  </div>
                </div>
              )}
              {user.twitter_username && (
                <div className="stat px-3">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-sm stat-value">
                    <a
                      href={`https://twitter.com/${user.twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {user.twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-2xl" />
            </div>
            <div className="stat-title pr-3">Followers</div>
            <div className="stat-value pr-3 text-3xl md:text-2xl">
              {user.followers}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-2xl" />
            </div>
            <div className="stat-title pr-3">Following</div>
            <div className="stat-value pr-3 text-2xl md:text-2xl">
              {user.following}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-2xl" />
            </div>
            <div className="stat-title pr-3">Public Repos</div>
            <div className="stat-value pr-3 text-3xl md:text-2xl">
              {user.public_repos}
            </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-2xl" />
            </div>
            <div className="stat-title pr-3">Public Gists</div>
            <div className="stat-value pr-3 text-3xl md:text-2xl">
              {user.public_gists}
            </div>
          </div>
        </div>
        <div className="rounded-lg shadow-xl mb-5 card bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl card-title">Latest Repositories</h2>

            {repos && (
              <div className="menu bg-base-100 rounded-box p-2">
                {repos.map((repo) => (
                  <RepoItem key={repo.id} repo={repo} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
