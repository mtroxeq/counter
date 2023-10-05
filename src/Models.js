import Golf from "./Golf";
import Polo from "./Polo";
import React from "react";
function Models() {
    return(
        <article class="models">
            <h3>
                Modele
            </h3>
            <section>
                <Golf />
                <h2>Golf</h2>
            </section>
            <section>
                <Polo />
                <h2>Polo</h2>
            </section>
        </article>
    );
}

export default Models;