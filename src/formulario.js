import React from "react";
import './styles.css';

function Formulario() {
    return (
        <div className="form-container">
            <h2>Formulário para Voluntários</h2>
            <form>
                <div className="input-field">
                    <input type="text" id="name" />
                    <label htmlFor="name">Nome Completo</label>
                </div>

                <div className="input-field">
                    <input type="email" id="email" />
                    <label htmlFor="email">Endereço de Email</label>
                </div>

                <div className="input-field">
                    <input type="tel" id="tel" />
                    <label htmlFor="tel">Número de Telefone</label>
                </div>

                <div className="input-field">
                    <input type="date" id="age" />
                    <label htmlFor="age">Data de Nascimento</label>
                </div>

                <h3>Disponibilidade</h3>

                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 21 de manhã
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 21 de tarde
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 22 de manhã
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 22 de tarde
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 23 de manhã
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 23 de tarde
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 24 de manhã
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <div className="checkbox-wrapper-21">
                    <label className="control control--checkbox">
                        Dia 24 de tarde
                        <input type="checkbox" />
                        <div className="control__indicator"></div>
                    </label>
                </div>
                <br />
                <button type="submit" className="btn-submit">Enviar Candidatura</button>
            </form>
        </div>
    );
}

export default Formulario;