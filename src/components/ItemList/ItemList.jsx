import Item from "../Item/Item";

function ItemList({ products }) {
    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {products.map((item) => (
                <div key={item.id} className="col">
                    <Item product={item} />
                </div>
            ))}
        </div>
    );
}

export default ItemList;
