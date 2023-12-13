import React , {useState} from "react";

const NavigationBar =()=>{
const search = (val,value) => {
    let Url = ''
    switch (value) {
      case 'categories':
        Url = `http://localhost:3000/api/users/searchByCategories/${val}`;
        break;
      case 'username':
        Url = `http://localhost:3000/api/users/searchByUsername/${val}`;
        break;
      default:
        console.error('not found');
        return;
    }
    axios.get(Url)
      .then((res) => {
        setSearchdata(res.data)
        setView("Search")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="navbar">
        
        </div>
  )

}