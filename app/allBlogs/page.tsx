import React from "react";
import Blog from "./blog";
import "./blogs.scss";
import { cookies } from "next/headers";

const getData = async () => {
  const response: Response = await fetch(`http://localhost:8080/getUsers`, {
    method: "GET",
  });
  return response.json();
};
const AllBlogs = () => {
  getData().then((data) => {
    console.log(data);
  });
  const cookieStore = cookies();
  const theme = cookieStore.get("jwt");
  console.log(theme);

  return (
    <div className="main">
      <div className="title">All Blogs</div>
      <div className="blogs">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default AllBlogs;
