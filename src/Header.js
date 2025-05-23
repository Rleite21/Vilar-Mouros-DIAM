import React from "react";
import "./styles.css";
import { Link, useNavigate } from 'react-router-dom';



function Header(){
    const navigate = useNavigate();
      
    function handleClick(event) {
      
        navigate('/target-route');
    }
    return(
    <header>
        <img class="vilarlogo" src="https://www.festivalvilardemouros.pt/wp-content/uploads/2023/06/vilar-de-mouros-2023-1.png" alt="vilarLOGO"/>
        <nav>
          <table class="main-nav">
              <th><Link to="/">Home</Link></th>
              <th><Link to="/FormVoluntario">Voluntários</Link></th>
              <th><Link to="/Inquerito">Inquérito</Link></th>
              <th><a href="#cartaz">Cartaz</a></th>

          </table>
        </nav>
    </header>
    );
}

export default Header;