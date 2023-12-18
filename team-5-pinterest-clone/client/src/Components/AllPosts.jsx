import React, { useState, useContext, useEffect } from "react";
import Users from "../data/usersDummy.js";
import Post from "./Post.jsx";
import OnePost from "./OnePost.jsx";
import { DataContext } from "../Context.js";

function AllPosts() {
  
  const { data, oneP, setOnep,details,setDetails,setUsers  } = useContext(DataContext);
  const handleDetails = (obj, obj2) => {
    setDetails((prevDetails) => true);
    setOnep(obj);
    setUsers(obj2);
    
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="allposts">
        {data.map((el, i) => (
          <Post key={i} data={el} handle={handleDetails} />
        ))}
      </div>
    </div>
  );
}

export default AllPosts;
