import notFoundIcon from '../assets/not_found.png';
import lookMl from '../assets/look_ml.png'


const Message = ({ type, msg }) => {
    const src = type === 'error' ? notFoundIcon : lookMl;
    return (
        <div className="message">
            <img src={src} alt={msg} />
            <div>{msg}</div>
        </div>
    );
}

export default Message;
