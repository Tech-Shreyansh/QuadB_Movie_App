import React from "react";
import { useNavigate } from "react-router-dom";
import './navBar.css'

function NavBar() {
    const navHandler = useNavigate();
    return(
        <div id="navBar">
        <div style={{cursor:"pointer",padding:"2vw 6vw"}}> GetShow </div>
        <div style={{cursor:"pointer",padding:"2vw 6vw"}} onClick={()=>navHandler(`/`)}> Home </div>
        </div>
    )
}

export default NavBar;
