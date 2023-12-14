import React, { useState } from "react";
import Users from "../data/usersDummy.js";
import Post from "./Post.jsx";
import OnePost from "./OnePost.jsx";
function AllPosts(props) {
  const [users, setUsers] = useState(Users);
  const [details, setDetails] = useState(false);
  const handleDetails = (obj) => {
    setDetails((prevDetails) => !prevDetails);
    props.set(obj);

    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {details && <OnePost one={props.one} />}
      <div className="allposts">
        {props.data.map((el, i) => (
          <Post data={el} users={users} handle={handleDetails} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
