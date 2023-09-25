import React, { useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

function MyArmyBot() {
  const [items, setItems] = useState("")
  let { id } = useParams('');
  console.log(id);
 
 


  useEffect(() => {
    

    console.log('this is before')
    fetch(`http://localhost:8001/bots/${id}`, 
    // {
    //  method: "PATCH",
    //  headers: {
    //   "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify({
      
    //  })
    // }
    )
    .then((r) => r.json())
    .then((data) => {
      console.log(data)
    setItems(data)
  })
  },[id])
  console.log("this after")
  

  // if(bot.id !== setItems ){}

  
  console.log(items)
  



  return (
    <>
    <div><h2>MyBotArmy</h2>
  <li className="display" key = {id}>
  <p>
  <img src={items.avatar_url} alt="text" />
  </p>
  <table className="item-table">
      <tr><td>{items.name}</td></tr>
      <tr><td>{items.health}</td></tr>
      <tr><td>{items.damage}</td></tr>
      <tr><td>{items.armor}</td></tr>
      <tr><td>{items.bot_class}</td></tr>
  </table>
  <h4>{items.catchphrase}</h4>
  <h4>{items.created_at}</h4>
  <h4>{items.updated_at}</h4>
  </li>

    </div>

    </>
  )
}

export default MyArmyBot