import { CartContext } from '../../context/CartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">

            {
                carrito.map((product) => (
                    <div key={product.id}>
                        <br />
                        <h3>{product.name}</h3>
                        <p>Precio: ${product.price}</p>
                        <p>Cantidad: {product.cantidad}</p>
                        <p>Precio total: ${product.price * product.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <h2>Precio total: ${precioTotal()}</h2>
                        <button className='btn btn-secondary' onClick={handleVaciar}>Vaciar</button>
                        <Link className='btn btn-secondary' to="/checkout">Finalizar compra</Link>
                    </> :
                    <h2>El carrito está vacío </h2>
            }

        </div>
    )
}

export default Carrito;