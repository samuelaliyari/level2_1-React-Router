import { Link } from "react-router-dom";
import "./Nav.css"
import { useState } from "react";
const Nav = () => {
    
    const [active, setActive] = useState("home");
    const change = () => {
        const value = event.target.id
        setActive(value)
    }
    return (  
        <nav>
            <h1>Logo</h1>
            <div>
                <Link 
                to="/" 
                onClick={change}
                id="home"
                className={active === "home" ? "active" : null}
                >Home</Link>
                <Link 
                to="/speisen" 
                onClick={change}
                id="speisekarte"
                className={active === "speisekarte" ? "active" : null}
                >Speisekarte</Link>
                <Link 
                to="/kontakt"
                onClick={change}
                id="kontakt"
                className={active === "kontakt" ? "active" : null}
                >Kontakt</Link>
                <Link 
                to="/öffnungszeiten" 
                onClick={change}
                id="öffnungszeiten"
                className={active === "öffnungszeiten" ? "active" : null}
                >Öffnungszeiten</Link>
                <Link 
                to="/galerie" 
                onClick={change}
                id="galerie"
                className={active === "galerie" ? "active" : null}
                >Galerie</Link>
            </div>
        </nav>
    );
}

export default Nav;