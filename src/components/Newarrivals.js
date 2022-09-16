import Cards from "./Cards";
import "./Newarrivals.css"

const Newarrivals = () => {
    return (
        <div className="arrivals">
            <span>
                <h1>NEW ARRIVLAS</h1>
                <p>VIEW ALL</p>
            </span>
            <div className="arrival__content">
                <Cards id={1} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_600,f_auto,q_auto/7963ad8c6a534703a043accb011f3f07_9366/Question_Mid_Men's_Basketball_Shoes_Black_GX7925_01_standard.jpg"} price={140}/>
                <Cards id={2} title={"QUESTION LOW MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_600,f_auto,q_auto/dc6b2176848c4116b789acde0138ff10_9366/Question_Low_Men's_Basketball_Shoes_White_GV7629_01_standard.jpg"} price={120}/>
                <Cards id={3} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/068b022e63214b838ecdac6f0124f43b_9366/AdollarAP_Nast_Classic_Leather_Legacy_Shoes_Beige_H01280_01_standard.jpg"} price={100}/>
                <Cards id={4} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/af7e58c029d649a9b304ac70012518a8_9366/Nano_X1_Women's_Training_Shoes_Black_FX3247_01_standard.jpg"} price={130}/>
                <Cards id={5} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/158801b71dee42df83c2ac3e00fe10b8_9366/Energylux_3_Men's_Shoes_Black_FX1697_01_standard.jpg"} price={50}/>
                <Cards id={6} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/bdbc6fea33a542e685feac7001344391_9366/Nano_X1_Women's_Training_Shoes_Orange_FY4028_01_standard.jpg"} price={130}/>
            </div>

            <span>
                <h1>OLD ARRIVLAS</h1>
                <p>VIEW ALL</p>
            </span>
            <div className="arrival__content">
                <Cards id={1} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_600,f_auto,q_auto/7963ad8c6a534703a043accb011f3f07_9366/Question_Mid_Men's_Basketball_Shoes_Black_GX7925_01_standard.jpg"} price={140}/>
                <Cards id={2} title={"QUESTION LOW MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_600,f_auto,q_auto/dc6b2176848c4116b789acde0138ff10_9366/Question_Low_Men's_Basketball_Shoes_White_GV7629_01_standard.jpg"} price={120}/>
                <Cards id={3} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/068b022e63214b838ecdac6f0124f43b_9366/AdollarAP_Nast_Classic_Leather_Legacy_Shoes_Beige_H01280_01_standard.jpg"} price={100}/>
                <Cards id={4} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/af7e58c029d649a9b304ac70012518a8_9366/Nano_X1_Women's_Training_Shoes_Black_FX3247_01_standard.jpg"} price={130}/>
                <Cards id={5} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/158801b71dee42df83c2ac3e00fe10b8_9366/Energylux_3_Men's_Shoes_Black_FX1697_01_standard.jpg"} price={50}/>
                <Cards id={6} title={"QUESTION MID MEN'S BASKETBALL SHOES"} src={"https://assets.reebok.com/images/w_276,h_276,f_auto,q_auto:sensitive,fl_lossy/bdbc6fea33a542e685feac7001344391_9366/Nano_X1_Women's_Training_Shoes_Orange_FY4028_01_standard.jpg"} price={130}/>
            </div>
        </div>
    );
}
 
export default Newarrivals;