import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './formstyle.css';

const palavrasProibidas = ["burro", "parvo", "paspalho", "estúpido", "patego", "porco", "idiotice"];

function FormVoluntario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusColor, setStatusColor] = useState('green');
    const [availability, setAvailability] = useState({
        dia21Manha: false,
        dia21Tarde: false,
        dia22Manha: false,
        dia22Tarde: false,
        dia23Manha: false,
        dia23Tarde: false,
        dia24Manha: false,
        dia24Tarde: false,
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setAvailability(prevState => ({
            ...prevState,
            [name]: checked
        }));
    };

    const handleCommentChange = (event) => {
        const { value } = event.target;
        setComment(value);
        const comentarioTexto = value.toLowerCase();
        const comentarioValido = !palavrasProibidas.some(palavra => comentarioTexto.includes(palavra));

        if (comentarioValido) {
            setStatusMessage('Comentário aceite');
            setStatusColor('green');
            setIsSubmitDisabled(false);
        } else {
            setStatusMessage('Comentário rejeitado! Uso de linguagem inapropriada.');
            setStatusColor('red');
            setIsSubmitDisabled(true);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Obrigado ${name} pela sua inscrição, em breve será contactado pela organização do festival.`);
    };

    return (
        <div className="App">
            <Header />
            <div className="form-container">
                <h2>Formulário para Voluntários</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                        <label htmlFor="name">Nome Completo</label>
                    </div>

                    <div className="input-field">
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label htmlFor="email">Endereço de Email</label>
                    </div>

                    <div className="input-field">
                        <input type="tel" id="tel" value={tel} onChange={(e) => setTel(e.target.value)} />
                        <label htmlFor="tel">Número de Telefone</label>
                    </div>

                    <div className="input-field">
                        <input type="date" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
                        <label htmlFor="age">Data de Nascimento</label>
                    </div>

                    <div className="input-field">
                        <textarea id="comment" value={comment} onChange={handleCommentChange} />
                        <label htmlFor="comment">Comentário</label>
                        <div id="comentario-status" style={{ color: statusColor }}>{statusMessage}</div>
                    </div>

                    <h3>Disponibilidade</h3>

                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 21 de manhã
                            <input type="checkbox" name="dia21Manha" checked={availability.dia21Manha} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 21 de tarde
                            <input type="checkbox" name="dia21Tarde" checked={availability.dia21Tarde} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 22 de manhã
                            <input type="checkbox" name="dia22Manha" checked={availability.dia22Manha} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 22 de tarde
                            <input type="checkbox" name="dia22Tarde" checked={availability.dia22Tarde} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 23 de manhã
                            <input type="checkbox" name="dia23Manha" checked={availability.dia23Manha} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 23 de tarde
                            <input type="checkbox" name="dia23Tarde" checked={availability.dia23Tarde} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 24 de manhã
                            <input type="checkbox" name="dia24Manha" checked={availability.dia24Manha} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <div className="checkbox-wrapper-21">
                        <label className="control control--checkbox">
                            Dia 24 de tarde
                            <input type="checkbox" name="dia24Tarde" checked={availability.dia24Tarde} onChange={handleCheckboxChange} />
                            <div className="control__indicator"></div>
                        </label>
                    </div>
                    <br />
                    <button type="submit" className="btn-submit" disabled={isSubmitDisabled}>Enviar Candidatura</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default FormVoluntario;
