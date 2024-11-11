import { Link } from "react-router-dom";

function Item({ product }) {
    return (
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img
                src={product.thumbnail.slice(0, -5) + "O.jpg"}
                alt={product.title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-secondary">Precio: ${product.price}</p>
                <Link
                    to={`/producto/${product.id}`}
                    className="btn btn-primary"
                >
                    Ver Producto
                </Link>
            </div>
        </div>
    );
}

export default Item;
