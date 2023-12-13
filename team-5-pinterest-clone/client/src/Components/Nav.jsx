import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='nav'><div><img src="" alt="" />
        <Link to="/" className="nav_home">Home</Link></div>
        <div className='inptandbtn'><div style={{ position: 'relative', display: 'inline-block' }}>
    <input type="text" placeholder='search' className='searchinpt' />
    <button className='srchbtn'><i className="fa-solid fa-magnifying-glass"></i></button>
  </div></div>
        <div className='alltext'><Link to="/all-posts" className="nav_text">Posts</Link>
        <Link to="/createPost" className="nav_text">Create</Link>
        <Link to="/profile" className="nav_text"><img src="https://th.bing.com/th/id/OIP.BVbNgsb0pic_Ju-OKXrU3QAAAA?w=270&h=270&rs=1&pid=ImgDetMain" alt="" className='myimg'/></Link>
        </div>
        </div>
  )
}

export default Nav