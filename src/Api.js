import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API,
});

//Interceptors are middleware

//This will "intercept" the request before it is sent.
instance.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("access_token") ??
    sessionStorage.getItem("access_token");

  config.headers.Accept = "application/json";
  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

//This will intercept the reponse before it is returned to the user
//If reponse is a success we just directly return the reponse, if unsuccessfull, we handle errors.
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => error.response
);

export default instance;
