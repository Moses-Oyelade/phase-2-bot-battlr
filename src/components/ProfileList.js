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
        created_at, updated_at} = item;

    return(

      <div className="card">
      <ul>
  <li key = {id}>
  <div className="robot">
  <Link to={`myarmybot/${id}`}>
    <img src={avatar_url} alt="text" />
    </Link>{" "}
  <table className="item-table">
    <tbody>
      <tr><td>Name:</td><td>{name}</td></tr>
      <tr><td>Health:</td><td>{health}</td></tr>
      <tr><td>Damage:</td><td>{damage}</td></tr>
      <tr><td>Armour:</td><td>{armor}</td></tr>
      <tr><td>Class:</td><td>{bot_class}</td></tr>
    </tbody>
  </table>
  </div>
  <div className="robot-2" >
  <table>
    <tbody>
      <tr><td>Catch:</td><td>{catchphrase}</td></tr>
      <tr><td>Creat:</td><td>{created_at}</td></tr>
      <tr><td>Updated:</td><td>{updated_at}</td></tr>
    </tbody>
  </table>
  </div>
  </li>
  </ul>
  </div>
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