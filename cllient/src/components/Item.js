import freeShippingIcon from '../assets/ic_shipping.png';
import { Link } from 'react-router-dom';

const Item = ({
    picture,
    price,
    free_shipping,
    location,
    title,
    id
}) => {

    return (
        <div className="search-item">
            <Link to={`/items/${id}`}>
                <div className="search-item-content">
                    <img className="thumbnail" src={picture} alt="Imágen descriptiva" />
                    <div className="itemInfo">
                        <div className="itemPrice">
                            $ {(price.amount)}
                            {free_shipping && <img src={freeShippingIcon} alt="Envío gratis" />}
                        </div>
                        <div>{title}</div>
                        <div>
                            Completo Unico!
                        </div>
                    </div>
                    <div className="location">{location}</div>
                </div>
            </Link>
        </div>
    )
}

export default Item;
