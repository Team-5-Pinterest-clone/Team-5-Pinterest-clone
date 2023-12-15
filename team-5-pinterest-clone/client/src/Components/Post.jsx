import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Link from '@mui/material/Link';
function Post(props) {
  const [users,setUsers]=useState({})
  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/users/getOneUserid/${props.data.users_idUsers}`)
      .then((result) => {
        setUsers(result.data[0]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className='postCard' onClick={()=>props.handle(props.data,users)}>
    <div className='postContainer'>
      <img src={props.data.photo} alt="" className='postimg' />
      <div className='userOverlay'>
        <img src={users.photo} alt="" className='userimg' />
        <h2>{users.username}</h2>
        <Link
      component="button"
      variant="body2"

    >
      {users.link}
    </Link>
      </div>
    </div>
  </div>
    
  )
}

export default Post