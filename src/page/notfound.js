import React from "react";
import { useHistory } from "react-router";

function NotFound() {
    const history = useHistory();

    function goBack() {
        history.goBack();
    }
    return (
        <div id="notfound">
            <div class="notfound">
                <h1>404</h1>
                <h2>Oops! Something Went Wrong!</h2>
                <br />
                <p>
                    Sorry but the page you are looking for does not exist, have
                    been removed. name changed or is temporarily unavailable
                </p>
                <br />
                <button onClick={goBack}>Return to Home</button>
            </div>
        </div>
    );
}

export default NotFound;