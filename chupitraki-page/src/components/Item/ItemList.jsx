import Item from "./Item"

export default function ItemList({bebidas}){
    return(
        <div className="itemListContainer">
            {bebidas.map((bebida)=>(
                <Item key={bebida.id} item={bebida}/>
            ))}
        </div>
    )
}