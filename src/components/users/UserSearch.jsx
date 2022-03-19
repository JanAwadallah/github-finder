import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";
import GithubContext from "../../context/githup/GithubContext";
import { searchUsers } from "../../context/githup/gitubActions";
import Alert from "../Alert";

const UserSearch = () => {
  const [query, setQuery] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (query.length === 0) {
      const msg = "Search can not be empty!";
      setAlert(msg, "error");
    } else {
      dispatch({
        type: "SET_LOADING",
      });
      const users = await searchUsers(query);
      dispatch({
        type: "GET_USERS",
        payload: { users: users.items, totalCount: users.total_count },
      });

      setQuery("");
    }
  };

  const inputHandeler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="grid xl:pl-5 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        {alert && <Alert msg={alert.msg} type={alert.type} />}
        <form style={{ caretColor: "transparent" }}>
          <div className="form-control">
            <div className="relative">
              <input
                value={query}
                onChange={inputHandeler}
                type="text"
                style={{ caretColor: "black" }}
                placeholder="Search"
                className="w-full pr-40 bg-gray-200 input input text-black"
              />
              <button
                onClick={submitHandler}
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {users.length > 0 && (
          <button className="btn btn-ghost btn-lg" onClick={clearUsers}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default UserSearch;
