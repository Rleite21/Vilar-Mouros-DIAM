import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';
import './inqueritostyle.css';


function Inquerito() {
    return (
        <div className="App">
            <Header />
            <InqueritoForm />
            <Footer />
        </div>
    );
}


function InqueritoForm(){
    const navigate = useNavigate(); 

    const [artistasEscolhidos, setArtistasEscolhidos] = useState([]);
    const [horariosEscolhidos, setHorariosEscolhidos] = useState([]);
    const [sugestao, setSugestao] = useState("");

    const handleMudancaArtista = (event) => {
        const valor = event.target.value;
        setArtistasEscolhidos(prevState => 
            prevState.includes(valor)
                ? prevState.filter(artista => artista !== valor)
                : [...prevState, valor]
        );
    };

    const handleMudancaHorario = (event) => {
        const valor = event.target.value;
        setHorariosEscolhidos(prevState =>
            prevState.includes(valor)
                ? prevState.filter(horario => horario !== valor)
                : [...prevState, valor]
        );
    };

    const handleMudancaSugestao = (event) => {
        setSugestao(event.target.value);
    };



    const handleSubmit = (event) => {
        event.preventDefault();
        navigate("/RespostaInquerito", {
            state: {
                artistas: artistasEscolhidos,
                horarios: horariosEscolhidos,
                sugestoes: sugestao
            }
        });
    };


    return(
        <div className="inquerito">
            <h1>Queremos a sua opinião !</h1>
        
        <div class="inquerito-container">  
            <div class="inquerito-form">
            <form>
                <h3>Qual o artista que mais gostou no festival?</h3>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        GNR
                        <input type="checkbox" value="GNR" onChange={handleMudancaArtista} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        Xutos & Pontapés
                        <input type="checkbox" value="Xutos & Pontapés" onChange={handleMudancaArtista} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        Capitão Fausto
                        <input type="checkbox" value="Capitão Fausto" onChange={handleMudancaArtista} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        David Fonseca
                        <input type="checkbox" value="David Fonseca" onChange={handleMudancaArtista} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
            </form>
            </div>
            <div class="inquerito-form">
            <form>
                <h3>Qual o seu horário preferido para os concertos?</h3>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        19:00h 
                        <input type="checkbox" value="19:00h" onChange={handleMudancaHorario} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        19:45h 
                        <input type="checkbox" value="19:45h" onChange={handleMudancaHorario} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        21:45h 
                        <input type="checkbox" value="21:45h" onChange={handleMudancaHorario} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        22:30h
                        <input type="checkbox" value="22:30h" onChange={handleMudancaHorario} />
                        <div className="control__indicator"></div>
                    </label>
                </div>
            </form>
            </div>
            <div class="inquerito-form">
                <h3>Sugestões...</h3> 
                <textarea id="sugestions" rows="5" value={sugestao} onChange={handleMudancaSugestao} placeholder="Sugestões aqui..."></textarea>
                
            </div>
            <br/>
            
        </div>
        <div className="btn-submit-container">
            <button type="submit" className="btn-submit" onClick={handleSubmit} >Submeter Inquerito </button>

        </div>
        </div>
    )
}

export default Inquerito;
