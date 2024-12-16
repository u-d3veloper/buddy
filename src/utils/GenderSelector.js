import React from 'react';

export default function GenderSelector({ gender, setGender }) {
    return (
        <div className="mb-6 text-center">
            <label htmlFor="gender" className="block mb-2">Ton sexe biologique</label>
            <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="p-2 rounded text-black w-64"
            >
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
            </select>
        </div>
    );
}
