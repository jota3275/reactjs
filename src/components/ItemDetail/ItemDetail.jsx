import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Count from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const { carrito, agregarAlCarrito } = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    if (!item) {
        return <p>Producto no encontrado.</p>;
    }

    const handleRestar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const handleSumar = () => {
        setCantidad(cantidad + 1);
    };

    const handleAgregar = () => {
        agregarAlCarrito(item, cantidad);
    };

    return (
        <div className="container">
            <div className="producto-detalle">
                
                <img
                    src={item.image || "default-image.jpg"}
                    alt={item.name || "Producto sin título"}
                />
                <div>
                    <h3 className="titulo">{item.name || "Producto sin título"}</h3>
                    <p className="descripcion">{item.description || "Descripción no disponible"}</p>
                    <p className="categoria">Categoría: {item.category || "sin categoría"}</p>
                    <p className="precio">${item.price || "Precio no disponible"}</p>

                    
                    <Count
                        cantidad={cantidad}
                        handleSumar={handleSumar}
                        handleRestar={handleRestar}
                        handleAgregar={handleAgregar}
                    />
                </div>
            </div>
        </div>
    );
};
export default ItemDetail