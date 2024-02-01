    import { Link } from "react-router-dom";
    import "./Header.css";


    function Header() {

    return(
    <div className="header">

        <div className="name">
            <Link to={"/"}><h1>Mind Wawe</h1> </Link>
        </div>
        <div className="nav">
        <Link to="/SignIn"><h1>Личный кабинет</h1></Link> 
        </div>

    </div>
    )

    }

    export default Header;