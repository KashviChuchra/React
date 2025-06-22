function InfoCard() {
    return (
        <div style={{
            border: "2px solid black",
            padding: "10px",
            margin: "20px",
            textAlign: "center",
            borderRadius: "8px"
        }}>
            <h1>Person's Name:</h1>
            <img src="https://via.placeholder.com/100" alt="Personal image" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>Dance</li>
                <li>Read</li>
                <li>Play</li>
            </ul>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

function Header() {
    return (
        <div style={{
            backgroundColor: "blue",
            color: "white",
            padding: "10px",
            textAlign: "center"
        }}>
            <h1>Kashvi's Portfolio</h1>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <Header />
        <InfoCard />
    </div>
);
