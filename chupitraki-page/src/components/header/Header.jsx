import { NavLink } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">
            <NavLink to="/">
            <img src="./src/assets/chupitrakiLogoRedondo.png" className="headerLogo"></img>
            </NavLink>
            <NavBar/>
        </div>
    )
}