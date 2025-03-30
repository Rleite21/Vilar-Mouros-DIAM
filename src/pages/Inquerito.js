import React, { useState, useEffect } from 'react';
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

function InqueritoForm() {
    const navigate = useNavigate();

    const [artistasEscolhidos, setArtistasEscolhidos] = useState([]);
    const [horariosEscolhidos, setHorariosEscolhidos] = useState([]);
    const [sugestao, setSugestao] = useState("");
    const [artistas, setArtistas] = useState([]); 

    useEffect(() => {
        fetch('/table.json') 
            .then(response => {
                if (!response.ok) {
                    throw new Error("Erro ao carregar os dados");
                }
                return response.json();
            })
            .then(data => {
                console.log("Dados carregados:", data);
                setArtistas(data.artists.map(artist => artist.name)); 
            })
            .catch(error => console.error("Erro ao carregar artistas:", error));
    }, []);

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

        const resultadosInquerito = JSON.parse(localStorage.getItem('resultadosInquerito')) || {
            artistas: {},
            horarios: {},
            sugestoes: []
        };

        artistasEscolhidos.forEach(artista => {
            resultadosInquerito.artistas[artista] = (resultadosInquerito.artistas[artista] || 0) + 1;
        });

        horariosEscolhidos.forEach(horario => {
            resultadosInquerito.horarios[horario] = (resultadosInquerito.horarios[horario] || 0) + 1;
        });

        if (sugestao.trim()) {
            resultadosInquerito.sugestoes.push(sugestao);
        }

        localStorage.setItem('resultadosInquerito', JSON.stringify(resultadosInquerito));

        navigate("/RespostaInquerito", {
            state: {
                artistas: artistasEscolhidos,
                horarios: horariosEscolhidos,
                sugestoes: sugestao
            }
        });
    };

    return (
        <div className="inquerito">
            <h1>Queremos a sua opinião !</h1>

            <div className="inquerito-container">
                <div className="inquerito-form">
                    <form>
                        <h3>Qual o artista que mais gostou no festival?</h3>
                        {artistas.map((artista, index) => (
                            <div className="checkbox-Artisa-Pref" key={index}>
                                <label className="control control--checkbox">
                                    {artista}
                                    <input
                                        type="checkbox"
                                        value={artista}
                                        onChange={handleMudancaArtista}
                                    />
                                    <div className="control__indicator"></div>
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
                <div className="inquerito-form">
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
                <div className="inquerito-form">
                    <h3>Sugestões...</h3>
                    <textarea
                        id="sugestions"
                        rows="5"
                        value={sugestao}
                        onChange={handleMudancaSugestao}
                        placeholder="Sugestões aqui..."
                    ></textarea>
                </div>
                <br />
            </div>
            <div className="btn-submit-container">
                <button type="submit" className="btn-submit" onClick={handleSubmit}>
                    Submeter Inquerito
                </button>
            </div>

            <div className="btn-results-container">
            <button
                type="button"
                className="btn-results"
                onClick={() => navigate("/ResultadosInquerito")}>
                Ver Resultados
            </button>
            </div>
        </div>
    );
}

export default Inquerito;
