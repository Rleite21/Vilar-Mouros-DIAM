import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './RespostaInquerito.css';


export default function RespostaInquerito() {
    const location = useLocation();  // Get location object
    
    const { artistas, horarios, sugestoes } = location.state || {};

    const artistasList = Array.isArray(artistas) && artistas.length > 0 ? artistas.join(", ") : "Nenhum selecionado";
    const horariosList = Array.isArray(horarios) && horarios.length > 0 ? horarios.join(", ") : "Nenhum selecionado";
    const sugestoesText = sugestoes || "Nenhuma crítica fornecida";

    return (
        <div>
            <Header />
            <h1>Obrigado pela sua resposta!</h1>
            <p><strong>Artistas Preferidos:</strong> {artistasList}</p>
            <p><strong>Horário Preferido:</strong> {horariosList}</p>
            <p><strong>Sugestões:</strong> {sugestoesText}</p>
        </div>
    );
}

function StatsResposta(){
    return(
        <div className="inquerito">
            <h1>Obrigado por sua resposta!</h1>
            <p>A sua opinião é muito importante para nós.</p>
        </div>
    );
} 

