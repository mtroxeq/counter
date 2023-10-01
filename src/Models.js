import { Route } from "react-router-dom";

function Models() {
    return(
        <Route path="/Models">
            <article id="models">
                <ul>
                    <li>Golf</li>
                    <li>Jetta</li>
                    <li>Passat</li>
                    <li>Arteon</li>
                    <li>Tuareg</li>
                    <li>Amarok</li>
                </ul>
            </article>
        </Route> 
    );
}

export default Models;