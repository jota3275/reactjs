import { Link } from "react-router-dom";

function Item({ product }) {
    if (!product || !product.image) {
        console.error("Product or product image is undefined:", product);
        return null;
    }

    const imageUrl = product.image.slice(0, -5) + "O.jpg";
    const title = product?.name || "Nombre del producto no disponible";
    const price = product?.price || "Precio no disponible";

    return (
        <div className="card shadow-sm" style={{ width: '18rem' }}>
            <img
                src={imageUrl}
                alt={title}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '200px' }}
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text text-secondary">Precio: ${price}</p>
                <Link
                    to={`/producto/${product.id}`}
                    className="btn btn-secondary"
                >
                    Ver Producto
                </Link>
            </div>
        </div>
    );
}

export default Item;
