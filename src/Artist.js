import React, { useState } from 'react';
import './styles.css';

function Artist({ name, image, video, description, date, hour }) {
    const [showVideo, setShowVideo] = useState(false);

    const videoHandler = () => {
        setShowVideo(!showVideo);
    };

    return (
        <div className="artist_block" onClick={videoHandler}>
            <img src={image} alt={name} />
            <div className="artist_info">
                <h2 id="titulo_banda">{name}</h2>
                <p id="atuacao">Atuação: {date} às {hour}</p>
                <p id="descricao">{description}</p>
            </div>
            {showVideo && (
                <iframe 
                    className="artist_block_video" 
                    src={video}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            )}
        </div>
    );
}

export default Artist;
