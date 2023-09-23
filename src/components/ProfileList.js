import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";




function ProfileList() {
const [items, setItems] = useState([]);



console.log("here at Profile")

  useEffect(() => {
    fetch("http://localhost:8001/bots")
    .then((r) => r.json())
    .then((data) => {
    setItems(data)
  })
  },[])


  console.log(items)
  const arrayDataItems = items.map((item) => 
  <li key = {item.id}>
  <p>
    <img src={item.avatar_url} alt="text" />
  </p>
  <table className="item-table">
      <tr><td>{item.name}</td></tr>
      <tr><td>{item.health}</td></tr>
      <tr><td>{item.damage}</td></tr>
      <tr><td>{item.armor}</td></tr>
      <tr><td>{item.bot_class}</td></tr>
  </table>
  <h4>{item.catchphrase}</h4>
  <h4>{item.created_at}</h4>
  <h4>{item.updated_at}</h4>
  <Link to={`myarmybot/${item.id}`}>Add to My Army Bot</Link>
  </li>
  )

            console.log(arrayDataItems)



  return (
    <div>
      <h2>Bot ProfileList</h2>
      <h3>{arrayDataItems}</h3>
    </div>
  )
}

export default ProfileList