import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
function ApiFetch() {
  const [item, setItem] = useState([]);
 
  useEffect(()=>{
    axios.get(`https://intense-tor-76305.herokuapp.com/merchants`)
      .then(res =>{
        console.log(res)
        setItem(res.data)
      })
      .catch(err =>{
        console.log(err)
      })
  },[])
 

 
  return (
    <ul>
       {
         item.map(user=> <li key ={user.id}>{user.firstname}</li>)
       }
    </ul>
  );
}
 
export default ApiFetch;