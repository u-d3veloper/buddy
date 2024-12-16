import React from 'react';

export default function ProbationToggle({ probation, setProbation }) {
    return (
        <div className="mb-6 text-center">
            <label htmlFor="probation" className="block mb-2">Es-tu en permis probatoire ?</label>
            <button
                onClick={() => setProbation(!probation)}
                className={`px-4 py-2 rounded w-64 ${probation ? 'bg-red-500' : 'bg-blue-500'}`}
            >
                {probation ? 'Oui' : 'Non'}
            </button>
        </div>
    );
}
