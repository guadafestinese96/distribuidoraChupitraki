import "./Item.css"

export default function Item({item}){
    return(
        <div className="itemContainer">
            <img className="itemImg" src={item.img} alt={item.modelo} />
            <p className="itemMarca">{item.marca}</p>
            <p className="itemModelo">{item.modelo}</p>
            <p className="itemPrecio">${item.precio}</p>
        </div>
    )
}