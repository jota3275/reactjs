import { useState } from "react";

const useApi = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const searchProducts = async (query = "autos") => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`);
            if (!res.ok) {
                throw new Error("Error al buscar productos");
            }
            const data = await res.json();
            setResults(data.results);
        } catch (err) {
            console.error("Error al buscar productos:", err);
            setError("No se pudieron cargar los productos, intente nuevamente.");
        } finally {
            setLoading(false);
        }
    };

    return { results, loading, searchProducts, error };
};

export default useApi;
