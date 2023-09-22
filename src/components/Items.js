import React from 'react'

function Items() {



  return (
    <div>
        <div>
        <p>
        <img src={bots.avatar_url} />
        </p>
        <table>
            <tr><td>{bots.name}</td></tr>
            <tr><td>{bots.health}</td></tr>
            <tr><td>{bots.damage}</td></tr>
            <tr><td>{bots.armor}</td></tr>
            <tr><td>{bots.bot_class}</td></tr>
        </table>
        </div>
        <h4>{bots.catchphrase}</h4>
        <h4>{bots.created_at}</h4>
        <h4>{bots.updated_at}</h4>

        

    </div>
  )
}

export default Items 