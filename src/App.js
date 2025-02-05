import React, { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
        fetch("https://sports-betting-api-ctpi.onrender.com/")  // Replace with your API URL
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => setMessage("Error fetching data"));
    }, []);

    return (
        <div>
            <h1>Sports Betting Predictions</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
