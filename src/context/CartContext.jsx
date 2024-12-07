import { createContext, useState, useEffect } from "react";

const getCarritoInicial = () => {
    try {
        return JSON.parse(localStorage.getItem("carrito")) || [];
    } catch (e) {
        console.error("Error al leer el carrito desde localStorage", e);
        return [];
    }
};

const carritoInicial = getCarritoInicial();

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }

        setCarrito(nuevoCarrito);
    };

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    };

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CartContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                cantidadEnCarrito,
                precioTotal,
                vaciarCarrito,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
