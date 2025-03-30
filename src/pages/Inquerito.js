import React from 'react';
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
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        Fogo Frio
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        Xutos & Pontapés
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        Capitão Fausto
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        David Fonseca
                        <input type="checkbox" />
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
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        19:45h 
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        21:45h 
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <div className="checkbox-Artisa-Pref">
                    <label className="control control--checkbox">
                        22:30h
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
            </form>
            </div>
            <div class="inquerito-form">
                <h3>Sugestões...</h3> 
                <textarea id="sugestions" rows="5" placeholder="Escreva as suas sugestões aqui..."></textarea>
                
            </div>
            <br/>
            
        </div>
        <div className="btn-submit-container">
            <button type="submit" className="btn-submit">Submeter Inquerito</button>
        </div>
        </div>
    )
}

export default Inquerito;
