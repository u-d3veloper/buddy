import React from 'react';

export default function WeightInput({ weight, setWeight }) {
    return (
        <div className="mb-6 text-center">
            <label htmlFor="weight" className="block mb-2">Ton poids (kg)</label>
            <input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => {
                    const value = e.target.value;
                    setWeight(value === '' ? '' : Number(value));
                }}
                className="p-2 rounded text-black w-64"
                placeholder="Entrez votre poids"
            />
        </div>
    );
}
