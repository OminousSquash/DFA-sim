import React from "react";

const NFAtoDFA: React.FC = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>NFA to DFA Converter</h1>
            <p>
                This page will help you visualize the conversion from a Non-deterministic Finite Automaton (NFA) to a Deterministic Finite Automaton (DFA).
            </p>
            {/* Add your NFA to DFA conversion UI here */}
            <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
                <strong>NFA:</strong>
                <div>
                    {/* NFA visualization or input goes here */}
                </div>
                <strong style={{ marginTop: "1rem", display: "block" }}>DFA:</strong>
                <div>
                    {/* DFA visualization or output goes here */}
                </div>
            </div>
        </main>
    );
};

export default NFAtoDFA;