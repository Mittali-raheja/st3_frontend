import Butts from "./Butts";
import "./Popular.css"

const Popular = () => {
    return (
        <div className="popular">
            <h1>POPULAR RIGHT NOW</h1>
            <div className="popular__btns">
                <div className="popular__btn">
                    <Butts text={"NANO"} color={true}/>
                </div>
                <div className="popular__btn">
                    <Butts text={"CLUB C"} color={true}/>                    
                </div>
                <div className="popular__btn">
                    <Butts text={"BASKETBALL"} color={true}/>    
                </div>
                <div className="popular__btn">
                    <Butts text={"ZIG"} color={true}/>    
                </div>
                <div className="popular__btn">
                    <Butts text={"FACE COVERS"} color={true}/>    
                </div>
            </div>
        </div>
    );
}
 
export default Popular;