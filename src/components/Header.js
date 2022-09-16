import "./Header.css";
import HeaderOption from "./HeaderOption";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from "react-redux";
import { logout, selectBasket } from "../features/userSlice";
import { Link, useHistory } from "react-router-dom";

const Header = () => {

    const dispatch = useDispatch();
    const product = useSelector(selectBasket);
    const history = useHistory();

    console.log(product);


    const Tologout = () => {
        dispatch(logout());    
    }

    const noobAnimation = () =>{
        var element = document.querySelector(".righticon");
        element.classList.add("animate");
    }
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__containerLeft">
                    <img src="https://images.squarespace-cdn.com/content/v1/55dc5073e4b09dce0e5af076/1603708368685-88CEVTPI4C2MLFKWWDVP/ke17ZwdGBToddI8pDm48kLN33MCaMri5_kQBC52hVftZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyqylgK486yu2adhfXJXe_419WGzblEfHOXASI1SNLnL3U5hJGSSZrBsjs2deskRFo/Reebok+logo+white+client+page.png" alt="" onClick={() => history.push("/")}/>
                    <HeaderOption title={"WOMEN"} bold={true}/>
                    <HeaderOption title={"MEN"} bold={true}/>
                    <HeaderOption title={"KIDS"} bold={true}/>
                    <HeaderOption title={"EXPLORE"} bold={false}/>
                    <HeaderOption title={"RELESE DATES"} bold={false}/>
                    <HeaderOption title={"SALE"} bold={false}/>
                </div>

                <div className="header__containerRight">
                    <div className="header__input">
                        <form>
                            <input type="text" placeholder="Search"/>
                            <SearchIcon/>
                        </form>
                    </div>
                    <div className="righticon" onClick={Tologout}>
                        <AccountCircleIcon/>
                    </div>
                    <Link to="/checkout" className="link">
                        <div className="righticon">
                            <ShoppingBasketIcon/>
                            <span onClick={() => noobAnimation}> {product?.length}</span>
                        </div>  
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Header;