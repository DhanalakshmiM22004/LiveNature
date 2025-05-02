import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // ✅ Correct `useNavigate` import
import "./Nav.css";

const Nav = () => {
    const [userName, setUserName] = useState(localStorage.getItem("fullName"));
    const navigate = useNavigate(); // ✅ Define `navigate` correctly

    useEffect(() => {
        setUserName(localStorage.getItem("fullName"));
    }, []);

    const handleSignout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
        setUserName(null); // ✅ Clears username from state
        navigate("/"); // ✅ Redirects to home page after logout
    };

    const [isMenuActive, setMenuActive] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!isMenuActive);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? "glass" : "transparent"}`}>
            <div className="logo">LiveNature</div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <span className="material-icons">{isMenuActive ? "close" : "menu"}</span>
            </div>
            <ul className={isMenuActive ? "active" : ""}>
                <li><Link to="/">Home</Link></li>
                <li><a href="#products">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a>
               </li>
                {userName && <li><p>{userName}</p></li>}
                {userName ? <li onClick={handleSignout} className="signout"><p>Sign Out</p></li> : <li><Link to="/signin">Sign In</Link></li>}
            </ul>
        </nav>
    );
};

export default Nav;
