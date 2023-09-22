import React from 'react'

function Items({items}) {

    const { name, health, 
        damage, armor, bot_class, 
        avatar_url, catchphrase, created_at, updated_at} = items

  return (
    <div className="items">
        <div>
        <p>
        <img src={avatar_url} alt={name} />
        </p>
        <table className="item-table">
            <tr><td>{name}</td></tr>
            <tr><td>{health}</td></tr>
            <tr><td>{damage}</td></tr>
            <tr><td>{armor}</td></tr>
            <tr><td>{bot_class}</td></tr>
        </table>
        </div>
        <h4>{catchphrase}</h4>
        <h4>{created_at}</h4>
        <h4>{updated_at}</h4>

        

    </div>
  )
}

export default Items 