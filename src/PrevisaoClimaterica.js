import React from "react";
import './styles.css';

function PrevisaoClimaterica({previsoes}){
    return(
      <>
      {previsoes.map(c=> <Previsao dia={c.dia} clima={c.clima} AddInfo={c.AddInfo}/> )}
      </>
    );
}

function Previsao({dia, clima, AddInfo}){
  return (
    <article class="previsao-climaterica">
          <h2>Previsão {dia}</h2>
          <p>{clima}. {AddInfo}</p>
    </article>
  );
}

export default PrevisaoClimaterica;