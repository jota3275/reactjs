import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import ItemListComponent from "../ItemListComponent/ItemListComponent";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoria
      ? query(productosRef, where("category", "==", categoria))
      : productosRef;
    getDocs(q)
      .then((resp) => {
        const productosData = resp.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProductos(productosData);
      })
      .catch((error) => {
        console.error("Error al obtener los productos: ", error);
      });
  }, [categoria]);

  return (
    <div>
      <ItemListComponent productos={productos} />
    </div>
  );
}

export default ItemListContainer;
