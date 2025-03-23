import React, { useState, useEffect, useRef } from "react";
import "./styles.css";

function SlideShowContainer() {
    const [slideIndex, setSlideIndex] = useState(0);
    const slidesRef = useRef([]);

    // Atualiza o slide automaticamente a cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % slidesRef.current.length);
        }, 3000);

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, []);

    const changeSlide = (n) => {
        setSlideIndex((prevIndex) => {
            let newIndex = prevIndex + n;
            if (newIndex >= slidesRef.current.length) return 0;
            if (newIndex < 0) return slidesRef.current.length - 1;
            return newIndex;
        });
    };

    return (
        <div>
            <section className="slideshow-container">
                {[
                    "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
                    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
                    "https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?cs=srgb&dl=pexels-thibault-trillet-44912-167491.jpg&fm=jpg"
                ].map((src, index) => (
                    <div
                        key={index}
                        className={`slide fade ${index === slideIndex ? "active" : ""}`}
                        ref={(el) => (slidesRef.current[index] = el)}
                        style={{ display: index === slideIndex ? "block" : "none" }}
                    >
                        <img src={src} alt={`Festival ${index + 1}`} />
                    </div>
                ))}

                {/* Botões de Navegação */}
                <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
            </section>
        </div>
    );
}

export default SlideShowContainer;
