import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

function ItemListContainer() {
  const { results, loading, searchProducts, error } = useApi();
  const { categoria } = useParams();

  useEffect(() => {
    if (categoria) {
      searchProducts(categoria);
    } else {
      searchProducts("autos");
    }
  }, [categoria]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Tienda de Autos</h1>

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        <ItemList products={results} />
      )}

      {!loading && results.length === 0 && !error && (
        <p className="text-center text-muted">No se encontraron autos.</p>
      )}
    </div>
  );
}

export default ItemListContainer;
