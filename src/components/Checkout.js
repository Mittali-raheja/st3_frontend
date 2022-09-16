import { useSelector } from "react-redux";
import { selectBasket } from "../features/userSlice";
import Cards from "./Cards";
import "./Checkout.css"

const Checkout = () => {

    const basket = useSelector(selectBasket);
    console.log(basket);
    let index = 0;
    return (
        <div className="checkout">
            <div className="checkout__content">
                <h1>Hello this is the checkout page</h1>
                {basket.map((index) => (
                    <div className="checkout__contentCard" onChange={() => index+=1}>
                        {/* <h1>{index.item.title}</h1>
                        <img src={index.item.src} alt=""/>
                        <p>${index.item.price}</p> */}
                        <Cards column={true} btn_title={"REMOVE"} title={index.item.title} src={index.item.src} price={index.item.price} id={index} key={index.item.id} remove={true}/>
                    </div>
                    
                ))}
            </div>
        </div>
    );
}
 
export default Checkout;