import React from 'react';

const DFAtoNFA: React.FC = () => {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>DFA to NFA Converter</h1>
            <p>
                This page will help you visualize the conversion from a Deterministic Finite Automaton (DFA) to a Non-deterministic Finite Automaton (NFA).
            </p>
            {/* Add your DFA to NFA conversion UI here */}
            <div style={{ marginTop: "2rem", border: "1px solid #ccc", padding: "1rem" }}>
                <strong>DFA:</strong>
                <div>
                    {/* DFA visualization or input goes here */}
                </div>
                <strong style={{ marginTop: "1rem", display: "block" }}>NFA:</strong>
                <div>
                    {/* NFA visualization or output goes here */}
                </div>
            </div>
        </main>
    );
};

export default DFAtoNFA;