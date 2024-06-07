import NavBar from "../NavBar/NavBar"
import "./Header.css"

export default function Header(){
    return(
        <div className="header">
            <img src="./src/assets/chupitrakiLogoRedondo.png" className="headerLogo"></img>

            <NavBar/>
        </div>
    )
}