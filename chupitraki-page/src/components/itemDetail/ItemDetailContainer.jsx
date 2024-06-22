import ItemDetail from "./itemDetail"
import { useParams } from "react-router-dom";
import useBebida from "../hooks/useBebida";

export default function ItemDetailContainer(){
    const {id} = useParams();
    const {bebida, loading} = useBebida(id);
    console.log(bebida)

    if(loading) return <h1>Cargando...</h1>

    if(!bebida){
        return <h1>No se encontró la bebida</h1>
    }else{
        return(
        <div className="itemDetailContainer">
           <ItemDetail item={bebida}/>
        </div>
    )
    }

    
}