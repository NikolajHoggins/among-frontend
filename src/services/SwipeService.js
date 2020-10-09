import api from "../Api";

export const swipe = (payload) => {
  return api.post("/swipe", payload);
};
