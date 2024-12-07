import React from 'react'

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>

            <div className="item-count">
                <button className='btn btn-secondary' onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button className='btn btn-secondary' onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito btn btn-secondary" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount