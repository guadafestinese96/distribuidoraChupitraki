export default function ItemDetail(){
    return(
        <div className="itemContainer">
            <img className="itemImg" src={item.img} alt={item.modelo} />
            <p className="itemMarca">{item.marca}</p>
            <p className="itemModelo">{item.modelo}</p>
            <p className="itemPrecio">${item.precio}</p>
            <button>-</button><span>0</span><button>+</button>
        </div>
    )
}