import React from "react";
import './styles.css';
import Artist from "./Artist.js";

function ArtistPage({artists}){
    return(
        <div>
            <section>
                <h2 id="title">CARTAZ</h2>
            </section>
            <div className="tabelaArtistas">
                <div className="artist_container">
                    {artists.map((artist) => (
                        <Artist 
                            key={artist.name} 
                            name={artist.name} 
                            image={artist.image} 
                            video={artist.video} 
                            description={artist.description} 
                            date={artist.date} 
                            hour={artist.hour}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ArtistPage;