import React, { useEffect, useState } from 'react';
import itemsService from '../services/item';
import Loader from './Loader';
import NotFoundProductsMessage from './NotFoundProductsMessage'

const ItemDetail = ({ id }) => {
    const [item, setItem] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        itemsService.getItem(id)
            .then(response => {
                setItem(response.item)
            })
            .catch(() => setError(true))
    }, [id])

    const itemInfo = () => {
        if (!item) {
            return <Loader />;
        } else {
            return (
                <div className="item-detail">
                    <div>
                        <img src={item.picture} alt="Foto del producto" />
                        <div className="item-info">
                            <div>{`${item.condition === 'new' ? 'Nuevo' : 'Usado'} - ${item.sold_quantity} vendidos`}</div>
                            <div className="item-title">{item.title}</div>
                            {
                                item.price.amount !== null &&
                                <div className="item-price">
                                    <div className="decimals">{String(item.price.decimals).padEnd(2, '0')}</div>
                                </div>
                            }
                            <button className="buy-item">Comprar</button>
                        </div>
                    </div>
                    <div className="description">
                        <div> Descripción del producto </div>
                        <div> {item.description} </div>
                    </div>
                </div>
            )
        }
    }

    return error ? <NotFoundProductsMessage type="error" /> : itemInfo();
}

export default ItemDetail;
