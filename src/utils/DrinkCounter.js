import React from 'react';

export default function DrinkCounter({ drinkCount, addDrink, removeDrink }) {
    return (
        <div className="mb-6 text-center">
            <label htmlFor="drink" className="block mb-2">Combien de verres as-tu pris ?</label>
            <div className="flex items-center justify-center space-x-4">
                <button
                    id="drink"
                    onClick={removeDrink}
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                    -
                </button>
                <span className="text-lg font-bold">{drinkCount} <i className="fa-solid fa-wine-glass"></i></span>
                <button
                    onClick={addDrink}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    +
                </button>
            </div>
        </div>
    );
}
