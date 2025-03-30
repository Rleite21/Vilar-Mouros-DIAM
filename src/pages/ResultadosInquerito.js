import React, { useState, useEffect } from 'react';
import Header from '../Header';

function ResultadosInquerito() {
    const [resultados, setResultados] = useState({
        artistas: {},
        horarios: {},
        sugestoes: []
    });

    useEffect(() => {
        const dadosInquerito = JSON.parse(localStorage.getItem('resultadosInquerito')) || {
            artistas: {},
            horarios: {},
            sugestoes: []
        };
        setResultados(dadosInquerito);
    }, []);

    return (
        <div className="resultados-inquerito">
            <Header />
            <h1>Resultados dos Inquéritos</h1>

            <div>
                <h2>Artistas Preferidos</h2>
                <ul>
                    {Object.entries(resultados.artistas).map(([artista, count]) => (
                        <li key={artista}>
                            {artista}: {count} votos
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Horários Preferidos</h2>
                <ul>
                    {Object.entries(resultados.horarios).map(([horario, count]) => (
                        <li key={horario}>
                            {horario}: {count} votos
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Críticas Submetidas</h2>
                <ul>
                    {resultados.sugestoes.map((sugestao, index) => (
                        <li key={index}>{sugestao}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ResultadosInquerito;