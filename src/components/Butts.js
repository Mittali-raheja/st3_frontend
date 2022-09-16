import "./Butts.css"
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';



const Butts = ( { text, color, onClick }) => {
    return (
        <div className="butts" onClick={onClick}>
            {color ? (
                <div className="btnblack">
                    <h4>{text}</h4>
                    <ArrowRightAltIcon/>
                </div>
            ) : (
                <div className="btnwhite">
                    <h4>{text}</h4>
                    <ArrowRightAltIcon/>
                </div>
            )}
        </div>
    );
}
 
export default Butts;