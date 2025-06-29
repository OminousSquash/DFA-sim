import React from "react";

const SimDFA: React.FC = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>Simulate DFA</h1>
            <p>
                This page will help you visualize the simulation of a Deterministic Finite Automaton (DFA).
            </p>
            {/* Add your DFA simulation UI here */}
            <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
                <strong>DFA:</strong>
                <div>
                    {/* DFA visualization or input goes here */}
                </div>
            </div>
        </main>
    );
};

export default SimDFA;