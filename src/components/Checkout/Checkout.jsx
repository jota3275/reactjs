import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        if (carrito.length === 0) {
            alert("El carrito está vacío. No puedes realizar la compra.");
            return;
        }

        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal(),
        };

        const pedidosRef = collection(db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })
            .catch((error) => {
                console.error("Error al crear el pedido:", error);
            });
    };

    if (pedidoId) {
        return (
            <div className="container">
                <h1 className="main-title">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        );
    }

    return (
        <div className="container">
            <h1 className="main-title">Finalizar compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} required />
                <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} required />
                <input type="tel" placeholder="Ingresá tu teléfono" {...register("telefono")} required />
                <button className="enviar btn btn-secondary" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
