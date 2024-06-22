import "./Item.css"
import { NavLink } from "react-router-dom"

export default function Item({ item }) {
    return (
        <div className="itemContainer">
            <NavLink to={`/item/${item.id}`}>
            <img className="itemImg" src={item.img} alt={item.modelo} />
            <p className="itemMarca">{item.marca}</p>
            <p className="itemModelo">{item.modelo}</p>
            <p className="itemPrecio">${item.precio}</p>
            </NavLink>
        </div>
    )
}