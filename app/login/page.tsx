"use client";

import React, { ChangeEvent, useState } from "react";
import styles from "../page.module.css";
function Login() {
  const [formData, setformData] = useState({ username: "", password: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setformData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData.username);
  };
  const login: any = async (e: any) => {
    e.preventDefault();
    console.log(formData.username);

    const postData = async () => {
      const data = {
        username: formData.username,
        password: formData.password,
      };

      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      // return response.json();
    };
    // postData().then((data) => {
    //   alert(data.message);
    // });
  };

  return (
    <main className={styles.main}>
      <form method="post" onSubmit={login}>
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
