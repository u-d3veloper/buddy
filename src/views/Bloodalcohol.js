import React, { useState } from 'react';
import calculator from '../utils/calculator';
import WeightInput from '../utils/WeightInput';
import GenderSelector from '../utils/GenderSelector';
import ProbationToggle from '../utils/ProbationToggle';
import DrinkCounter from '../utils/DrinkCounter';
import ResultDisplay from '../utils/ResultDisplay';

export default function BloodAlcohol() {
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('masculin');
    const [drinkCount, setDrinkCount] = useState(0);
    const [probation, setProbatoire] = useState(false);
    const [result, setResult] = useState(null);
    const [alcoholLevel, setAlcoholLevel] = useState(null);

    const alcohol = 10; // Masse approximative d'alcool par verre (gramme)

    const addDrink = () => {
        setDrinkCount(drinkCount + 1);
    };

    const removeDrink = () => {
        if (drinkCount > 0) {
            setDrinkCount(drinkCount - 1);
        }
    };

    const handleCalculate = () => {
        if (weight === '' || weight <= 0) {
            alert('Veuillez entrer un poids valide.');
            return;
        }

        const mass = drinkCount * alcohol;
        const { rate, isAbove } = calculator(probation, weight, gender, mass);

        setAlcoholLevel(rate.toFixed(2)); // Arrondir
        setResult(isAbove ? (
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

            <WeightInput weight={weight} setWeight={setWeight} />
            <GenderSelector gender={gender} setGender={setGender} />
            <ProbationToggle probation={probation} setProbatoire={setProbatoire} />
            <DrinkCounter drinkCount={drinkCount} addDrink={addDrink} removeDrink={removeDrink} />

            <div className="mb-6">
                <a href="/event" class="text-4xl absolute left-4 top-4">
                    <i class="fa-solid fa-angle-left"></i>
                </a>
                <button
                    onClick={handleCalculate}
                    className="bg-green-500 text-white px-6 py-3 rounded"
                >
                    Calculer
                </button>
            </div>

            <ResultDisplay result={result} alcoholLevel={alcoholLevel} />
        </div>
    );
}
