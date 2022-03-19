import axios from "axios";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
});

export const searchUsers = async (query) => {
  const params = new URLSearchParams({
    q: query,
  });

  try {
    const res = await github.get(`/search/users?${params}`);
    const users = await res.data;
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });
  try {
    const res = await github.get(`/users/${login}`);
    const repos = await github.get(`/users/${login}/repos?${params}`);
    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const user = {
        data: await res.data,
        latestRepos: await repos.data,
      };
      return user;
    }
  } catch (error) {
    console.log(error);
  }
};
