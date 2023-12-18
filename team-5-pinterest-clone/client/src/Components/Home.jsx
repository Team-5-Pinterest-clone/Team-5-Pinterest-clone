import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const handleHomeBTN=()=>{
        navigate('/all-posts')
    }
  return (
   
    <div className='homebg'><h2 className='hometitle'>Welcome to Name– Where Every Image Tells a Story!</h2>
    <p className='hometxt'>Unlock the beauty of visual storytelling with Name, your go-to destination for a captivating collection of images. Immerse yourself in a world where creativity knows no bounds, and each photograph is a window into the extraordinary.</p>
    <button className='homebtn' ><a href="http://localhost:3000/all-posts">See Posts</a></button></div>
  )
}

export default Home