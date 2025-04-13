import { useState, useEffect } from "react";
import axios from "axios";
import "./simple_style.css";

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const ENDPOINT_URL = "http://127.0.0.1:8000/votacao/api/questions/";

  useEffect(() => {
    axios.get(ENDPOINT_URL).then((response) => setQuestions(response.data));
  }, []);

  return (
    <div className="container">
      <h1>Lista de questões</h1>
      {questions.map((q, index) => (
        <h3 key={index}>{q.questao_texto}</h3>
      ))}
    </div>
  );
};

export default QuestionList;