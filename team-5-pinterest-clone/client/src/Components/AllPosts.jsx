import React, { useState,useContext } from "react";
import Users from "../data/usersDummy.js";
import Post from "./Post.jsx";
import OnePost from "./OnePost.jsx";
import { DataContext } from '../Context.js';

function AllPosts() {
  const [users,setUsers]=useState({})
  const [details, setDetails] = useState(false);
  const { data, oneP, setOnep } = useContext(DataContext);
  const handleDetails = (obj,obj2) => {
    setDetails((prevDetails) => true);
    setOnep(obj);
    setUsers(obj2)
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      {details && <OnePost  one={oneP} set={setDetails} user={users}/>}
    <div className="allposts">
      {data.map((el, i) => (
        <Post data={el}  handle={handleDetails}/>
      ))}
    </div></div>
  );
}

export default AllPosts;
