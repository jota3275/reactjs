import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Usamos useParams para obtener el ID del producto

function ItemDetailContainer() {
    const { id } = useParams(); // Obtenemos el ID del producto desde la URL
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                setLoading(true);
                setError(null);
                const res = await fetch(`https://api.mercadolibre.com/items/${id}`);
                if (!res.ok) {
                    throw new Error('Error al obtener los detalles del producto');
                }
                const data = await res.json();
                setProductDetails(data);
            } catch (err) {
                setError("No se pudieron cargar los detalles del producto.");
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    return (
        <div className="container mt-5">
            {loading ? (
                <p className="text-center text-muted">Cargando detalles...</p>
            ) : error ? (
                <p className="text-center text-danger">{error}</p>
            ) : (
                productDetails && (
                    <div className="row">
                        <div className="col-md-6">
                            <img
                                src={productDetails.pictures[0]?.secure_url || productDetails.thumbnail}
                                alt={productDetails.title}
                                className="img-fluid"
                                style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'contain',
                                maxHeight: '600px',
                                display: 'block',
                                margin: '0 auto',
                                }}
                            />
                        </div>
                        <div className="col-md-6">
                            <h2>{productDetails.title}</h2>
                            <p>{productDetails.description || 'Descripción no disponible'}</p>
                            <p className="text-secondary">Precio: ${productDetails.price}</p>
                            <a
                                href={productDetails.permalink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Ver Producto en Mercado Libre
                            </a>
                        </div>
                    </div>
                )
            )}
        </div>
    );
}

export default ItemDetailContainer;
