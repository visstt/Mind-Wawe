    import { Link } from "react-router-dom";
    import "./Header.css";

    function Header() {

    return(
    <div className="header">

        <div className="name">
            <Link to={"/"}><h1>Mind Wawe</h1> </Link>
        </div>
        <div className="nav">
            <div class="box">
                <div div class="container-1">
                    <input type="search" id="search" placeholder="Search..." />
                </div>
            </div>

            <Link to="/SignIn"><h1>Личный кабинет</h1></Link> 
        </div>

    </div>
    )

    }

    export default Header;