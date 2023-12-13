import React, { useState } from "react";
import Users from "../data/usersDummy.js";
import Post from "./OnePost.jsx";
function AllPosts(props) {
  const [users, setUsers] = useState(Users);
  return (
    <div className="allposts">
      {props.data.map((el, i) => (
        <Post data={el} users={users} />
      ))}
    </div>
  );
}

export default AllPosts;
