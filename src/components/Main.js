import Butts from "./Butts";
import "./Main.css"

const Main = () => {
    return (
        <div className="main">
            <div className="main__imgContainer">
                <img src="https://content.shop4reebok.com/static/hero/RBK_Outlet_1920x800_15th_Dec.jpg" alt=""/>
                <div className="main__buttons">
                    <Butts text={"SHOP FOR MEN"} color={!true}/>
                    <Butts text={"SHOP FOR WOMEN"} color={!true}/>
                </div>
            </div>
        </div>
    );
}
 
export default Main;