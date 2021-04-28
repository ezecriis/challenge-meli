import notFoundIcon from '../assets/not_found.png';
import lookMl from '../assets/look_ml.png';

const NotFoundProductsMessage = ({ type, msg, props }) => {
  const src = type === 'error' ? notFoundIcon : lookMl;
  return (
    <div className="justify-content-center container">
      <div className="products-not-found">
        <div>
          <img src={src} alt={msg} />
          <div>{msg}</div>
        </div>
        <h3>No hay publicaciones que coincidan con tu búsqueda.</h3>
        <ul>
          <li>Revisa la ortografía de la palabra.</li>
          <li>Utiliza palabras más genéricas o menos palabras.</li>
          <li>
            Navega por categorías de productos para encontrar un producto
            similar.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotFoundProductsMessage;
