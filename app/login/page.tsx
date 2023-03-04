"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "../page.module.css";
function Login() {
  const [formData, setformData] = useState({ username: "", password: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
  };
  const login = async (e: SubmitEvent) => {
    e.preventDefault();
  };

  return (
    <main className={styles.main}>
      <form action="/" method="post">
        <label>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label>Password:</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Login;
