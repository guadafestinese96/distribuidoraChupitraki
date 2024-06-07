import "./Inicio.css"
import useBebidas from "../hooks/useBebidas"
import ItemList from "../Item/ItemList";

export default function Index(){
    const {bebidas, loading} = useBebidas();
    console.log(useBebidas());

    if(loading) return <h2>Cargando</h2>

    return(
        <div className="indexContainer">
            <h1 className="titleIndex">DISTRIBUIDORA CHUPITRAKI</h1>
            <h2 className="textIndex">distribuidora de bebidas nacionales e importadas</h2>
            <div className="drinksContainer">
                <ItemList bebidas={bebidas} />
            </div>
        </div>    
        )
}