import {useState} from "react";
import axios from "axios";
import moment from "moment";
import "./simple_style.css";
function CreateQuestion() {
    const ENDPOINT_URL = 'http://127.0.0.1:8000/votacao/api/questions/';
    const [text, setText] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        const pubDate = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss.SSSSSS");
        axios.post(ENDPOINT_URL, {"questao_texto" : text, "pub_data": pubDate}).then();
}
return(
    <div className="container">
        <h1>Inserir uma nova questão</h1>
        <form onSubmit={submitHandler}>
            <label>Texto da questão: </label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <br/><br/>
            <input type="submit" value="Submeter"/>
        </form>
    </div>
 );
}
export default CreateQuestion;