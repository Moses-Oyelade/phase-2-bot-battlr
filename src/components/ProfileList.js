import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";




function ProfileList() {
const [items, setItems] = useState([]);



console.log("here at Profile")

  useEffect(() => {
    fetch(`http://localhost:8001/bots`)
    .then((r) => r.json())
    .then((data) => {
    setItems(data)
  })
  },[setItems])


  console.log(items)
  const arrayDataItems = items.map((item) => {
    const { id, avatar_url, name, health, damage, 
        armor, bot_class, catchphrase, 
        created_at, updated_at} = item

    return(
      <ul>
  <li key = {id}>
  <p className="robot">
    <img src={avatar_url} alt="text" />
 
  <table className="item-table">
      <tr><td>{name}</td></tr>
      <tr><td>{health}</td></tr>
      <tr><td>{damage}</td></tr>
      <tr><td>{armor}</td></tr>
      <tr><td>{bot_class}</td></tr>
  </table>
  </p>
  <h4>{catchphrase}</h4>
  <h4>{created_at}</h4>
  <h4>{updated_at}</h4>
  <Link to={`myarmybot/${id}`}><button>Add to My Army Bot</button></Link>{" "}
  </li>
  </ul>
    );
})

            console.log(arrayDataItems)



  return (
    <div>
      <h2>Bot ProfileList</h2>
      <h3>{arrayDataItems}</h3>
    </div>
  )
}

export default ProfileList