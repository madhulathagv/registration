import logo from "./CFS-logo.svg";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="CFS"/>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                </ul>
            </nav>
            <input type="text" placeholder="Search..." className="search-bar" />
        </header>
    );
};

export default Header;
