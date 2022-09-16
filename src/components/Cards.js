import { useDispatch } from "react-redux";
import Butts from "./Butts";
import "./Cards.css"
// import { ADD_TO_BASKET } from "./features/userSlice";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../features/userSlice';


const Cards = ({ id, title, src, price, btn_title, remove, key, column }) => {

    const dispatch = useDispatch();
    console.log(id)


    const addToBasket = () => {
        dispatch(ADD_TO_BASKET({
            item: {
                id: id,
                title: title,
                src: src,
                price: price,
            }
        }))
    }


    const removeFromBasket = () => {
        dispatch(REMOVE_FROM_BASKET({
            id: id,
        }))
    }
    return (
        <div className={ column ? "card card__col" : " card card__row"}>
            <img src={src} alt=""/>
            <div className="card__text">
                <h5>{title}</h5>
                <p>${price}</p>
                <Butts className="btn" text={btn_title || "BUY NOW"} color={true} onClick={remove ? removeFromBasket : addToBasket}/>
            </div>
        </div>
    );
}
 
export default Cards;