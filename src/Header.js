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
        
        <div class="header_container">

            <div id="festival-photo">
                <img src="https://static.seetickets.com/content/SeeTickets/WebAdminUploads/Hor%C3%A1rios_IrntInChKgMlC.png" alt="cartaz"/>

            </div>

            <div id="festival-info">
                <h3>Festival Vilar dos Mouros</h3>
                <p>O CA Vilar de Mouros terá lugar nos dias 21, 22, 23 e 24 de Agosto de 2025. A icónica aldeia minhota acolhe e dá nome àquele que é o Decano dos Festivais de música na Península Ibérica, e que ano após ano tem vindo a revitalizar a relação da região com a cultura.</p>

            </div>
        
        

        </div>
    </header>
    );
}

export default Header;