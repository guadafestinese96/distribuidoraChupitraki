import { collection, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useBebidas() {
  const [bebidas, setBebidas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = collection(db, "bebidas");

    getDocs(productsCollection)
      .then((snapshot) => {
        setBebidas(snapshot.docs.map((doc) => doc.data()));
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    bebidas,
    loading,
  };
}

//Lo que devuelvo tiene que llamarse igual que lo que destructuro