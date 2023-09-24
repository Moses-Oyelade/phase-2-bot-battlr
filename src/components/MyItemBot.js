import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";


function MyItemBot() {



    const [items, setItems] = useState("")
    let { id } = useParams();
    console.log(id);
  
    useEffect(() => {
      fetch(`http://localhost:8001/bots/${id}`)
      .then((r) => r.json())
      .then((data) => {
      setItems(data.bots)
    })
    },[id])
  
    const bot = items.find((data) => String(data.id) === id);
    console.log(bot);
  
  
    // const { avatar_url, name, health, damage, 
    //   armor, bot_class, catchphrase, 
    //   created_at, updated_at} = items
  
    return (
      <>
      <div><h2>MyBotArmy</h2><li key = {id}>
    <p>
    <img src={bot.avatar_url} alt="text" />
    </p>
    <table className="item-table">
        <tr><td>{bot.name}</td></tr>
        <tr><td>{bot.health}</td></tr>
        <tr><td>{bot.damage}</td></tr>
        <tr><td>{bot.armor}</td></tr>
        <tr><td>{bot.bot_class}</td></tr>
    </table>
    <h4>{bot.catchphrase}</h4>
    <h4>{bot.created_at}</h4>
    <h4>{bot.updated_at}</h4>
    </li>
  
      </div>

      </>
  )
}

export default MyItemBot


