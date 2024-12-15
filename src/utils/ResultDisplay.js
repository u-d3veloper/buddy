import React from 'react';

export default function ResultDisplay({ result, alcoholLevel }) {
    if (!result) return null;

    return (
        <div className="mt-6 p-3 bg-gray-800 rounded text-center w-80">
            <h2 className="text-lg font-bold mb-4">Résultat :</h2>
            <p className="text-xl pb-3">{result}</p>
            <p>Taux d'alcoolémie : <span className="text-xl">{alcoholLevel} g/L</span></p>
        </div>
    );
}
