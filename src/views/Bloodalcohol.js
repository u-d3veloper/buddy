import React, { useState } from 'react';
import calculator from '../utils/calculator';

export default function Bloodalcohol() {
    // États pour le poids, le sexe, le nombre de verres et le permis probatoire
    const [poids, setPoids] = useState('');
    const [sexe, setSexe] = useState('masculin');
    const [nombreVerres, setNombreVerres] = useState(0);
    const [probatoire, setProbatoire] = useState(false);
    const [resultat, setResultat] = useState(null);
    const [tauxAlcoolemie, setTauxAlcoolemie] = useState(null);

    const alcoolParVerre = 10; // Masse approximative d'alcool par verre (gramme)

    const addGlass = () => {
        setNombreVerres(nombreVerres + 1);
    };

    const removeGlass = () => {
        if (nombreVerres > 0) {
            setNombreVerres(nombreVerres - 1);
        }
    };

    const handleCalculate = () => {
        if (poids === '' || poids <= 0) {
            alert('Veuillez entrer un poids valide.');
            return;
        }

        const masse = nombreVerres * alcoolParVerre;
        const { taux, estAuDelaDuSeuil } = calculator(probatoire, poids, sexe, masse);

        setTauxAlcoolemie(taux.toFixed(2));
        setResultat(estAuDelaDuSeuil ? (
            <span>
                <div>Au-dessus du seuil légal</div>
                <div>❌ Tu ne peux pas conduire ! ❌</div>
            </span>
        ) : <span>
            <div>En-dessous du seuil légal</div>
            <div> ✅ Tu peux conduire ! ✅</div>
        </span>);
    };


    return (
        <div className="bg-zinc-900 min-h-screen text-white flex flex-col items-center justify-center">
            <h1 className="text-2xl font-extrabold mb-8 text-center">Calculateur d'alcoolémie</h1>

            {/* Entrée pour le poids */}
            <div className="mb-6 text-center">
                <label htmlFor="poids" className="block mb-2">Ton poids (kg)</label>
                <input
                    id="poids"
                    type="number"
                    value={poids}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPoids(value === '' ? '' : Number(value));
                    }}
                    className="p-2 rounded text-black w-64"
                    placeholder="Entrez votre poids"
                />

            </div>

            {/* Sélecteur pour le sexe */}
            <div className="mb-6 text-center">
                <label htmlFor="sexe" className="block mb-2">Ton sexe biologique</label>
                <select
                    id="sexe"
                    value={sexe}
                    onChange={(e) => setSexe(e.target.value)}
                    className="p-2 rounded text-black w-64"
                >
                    <option value="masculin">Masculin</option>
                    <option value="feminin">Féminin</option>
                </select>
            </div>

            {/* Bouton pour le permis probatoire */}
            <div className="mb-6 text-center">
                <label htmlFor="probatoire" className="block mb-2">Es-tu en permis probatoire ?</label>
                <button
                    onClick={() => setProbatoire(!probatoire)}
                    className={`px-4 py-2 rounded w-64 ${probatoire ? 'bg-red-500' : 'bg-blue-500'}`}
                >
                    {probatoire ? 'Oui' : 'Non'}
                </button>
            </div>

            {/* Ajustement du nombre de verres */}
            <div className="mb-6 text-center">
                <label htmlFor="verre" className="block mb-2">Combien de verres as-tu pris ?</label>

                <div className="flex items-center justify-center space-x-4">
                    <button
                        id="verre"
                        onClick={removeGlass}
                        className="bg-gray-500 text-white px-4 py-2 rounded"
                    >
                        -
                    </button>
                    <span className="text-lg font-bold">{nombreVerres} <i class="fa-solid fa-wine-glass"></i></span>
                    <button
                        onClick={addGlass}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Bouton pour calculer */}
            <div className="mb-6">
                <button
                    onClick={handleCalculate}
                    className="bg-green-500 text-white px-6 py-3 rounded"
                >
                    Calculer
                </button>
            </div>

            {/* Résultat */}
            {resultat && (
                <div className="mt-6 p-3 bg-gray-800 rounded text-center w-80">
                    <h2 className="text-lg font-bold mb-4">Résultat :</h2>
                    <p className='text-xl pb-3'>{resultat}</p>
                    <p>Taux d'alcoolémie : <span className="text-xl">{tauxAlcoolemie} g/L</span></p>
                </div>
            )}
        </div>
    );
}
