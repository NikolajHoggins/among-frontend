import React, { useState } from "react";
import { login } from "../../services/UserService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    login({ email, password }).then((resp) => {
      if (resp.data.status === "success") {
        localStorage.setItem("access_token", resp.data.token);
        window.location.href = "/";
      }
    });
  }

  function handleOnChange(e) {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <br />
        <label htmlFor="email">Email brudda</label>
        <input
          onChange={handleOnChange}
          value={email}
          name="email"
          type="text"
          placeholder="email@mail.com..."
        />
        <br />
        <br />

        <label htmlFor="email">password brudda</label>
        <input
          onChange={handleOnChange}
          value={password}
          name="password"
          type="password"
          placeholder="******"
        />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
