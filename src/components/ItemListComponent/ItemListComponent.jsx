import React from "react";
import Item from "../Item/Item";

function ItemListComponent({ productos }) {
    return (
        <div className="item-list-container">
            <div className="row">
                {productos.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <Item product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ItemListComponent;
