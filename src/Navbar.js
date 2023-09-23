import React from "react";
import { NavLink } from "react-router-dom"

function Navbar() {



  return (
    <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/botcollection">BotCollection</NavLink>
                </li>
                <li>
                    <NavLink to="myarmybot">ArmyBot</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar