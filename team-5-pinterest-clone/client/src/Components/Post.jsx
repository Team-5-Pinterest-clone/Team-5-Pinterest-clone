import React,{useState} from 'react'

function Post(props) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handlePostClick = () => {
      setPopupOpen(true);
    };
  
    const closePopup = () => {
      setPopupOpen(false);
    };
  return (
    <div className='postCard' onClick={handlePostClick}>
    <div className='postContainer'>
      <img src={props.data.photo} alt="" className='postimg' />
      <div className='userOverlay'>
        <img src={props.users[props.data.userIndex].photo} alt="" className='userimg' />
        <h2>{props.users[props.data.userIndex].username}</h2>
      </div>
    </div>
  </div>
    
  )
}

export default Post