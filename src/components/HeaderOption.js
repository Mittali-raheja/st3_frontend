import "./HeaderOption.css"

const HeaderOption = ( { title, bold } ) => {
    return (
        <div className="headeroption">
            {bold ? (
                <h3>{title}</h3>
            ) : (
                <h3 className="headeroption__nonbold">
                    {title}
                </h3>
            )}
        </div>
    );
}
 
export default HeaderOption;