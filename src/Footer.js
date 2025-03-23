import React, { useState } from "react";

function Footer() {
    const [showNames, setShowNames] = useState(false);

    const toggleNames = () => {
        setShowNames(!showNames);
    };

    return (
        <div className="footer_contacts">
            <section>
                <h2>Contactos</h2>
            </section>

            <footer onClick={toggleNames} style={{ cursor: 'pointer' }}>
                <a id="email" href="mailto:vilarMourosSupport@gmail.com">vilarMourosSupport@gmail.com</a>
                {showNames && (
                    <div className="names">
                        <p>Eduardo Carvalho</p>
                        <p>Rodrigo Leite</p>
                        <p>Joao Soares</p>
                    </div>
                )}
            </footer>
            <script src="script.js"></script>
        </div>
    );
}

export default Footer;