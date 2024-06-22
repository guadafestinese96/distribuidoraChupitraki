import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";


export default function useBebida(id) {

    const [bebida, setBebida] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
    
        const productRef = doc(db, "bebidas", id);
        getDoc(productRef)
          .then((doc) => {
            if (doc.exists()) {
              setBebida({
                id: doc.id,
                ...doc.data(),
              });
            }
          })
          .finally(() => setLoading(false));
      }, [id]);
    
    return {bebida, loading};
}