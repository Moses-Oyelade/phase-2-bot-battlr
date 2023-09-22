import React, {useEffect, useState} from 'react'


function ProfileList() {

  const [items, setItems] = useState([]);

 console.log("from List")

  useEffect(() =>{
    fetch("http://localhost:3000/bots")
    .then((r) => r.json())
    .then((bots) => setItems(bots))
  },[]);




  return (
    <div>
      <h2>Bot ProfileList</h2>
      






    </div>
  )
}

export default ProfileList