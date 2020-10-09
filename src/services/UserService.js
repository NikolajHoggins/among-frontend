import api from "../Api";

export const login = (payload) => {
  return api.post("/user/login", payload);
};

export const self = () => {
  return api.get("/user");
};

export const getPotentialMatches = (take, skip) => {
  return api.get(`/users/${take}/${skip}`);
};
