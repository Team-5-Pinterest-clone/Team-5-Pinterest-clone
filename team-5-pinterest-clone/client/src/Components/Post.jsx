import React from 'react'

function Post(props) {

  return (
    <div className='postCard' onClick={()=>props.handle(props.data)}>
    <div className='postContainer'>
      <img src={props.data.photo} alt="" className='postimg' />
      <div className='userOverlay'>
        <img src={"no"} alt="" className='userimg' />
        <h2>{""}</h2>
      </div>
    </div>
  </div>
    
  )
}

export default Post