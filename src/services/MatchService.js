import api from "../Api";

export const getMatches = () => {
  return api.get("/matches");
};
