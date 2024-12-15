import React from "react";

const Paiement = () => {
  return (
    <div className="flex items-center justify-center bg-[#167974] rounded-full px-6 mb-10 w-4/5">
      <img
        src="https://finance-heros.fr/wp-content/uploads/2022/06/sumeria_app_icon_1600.png"
        alt="Logo Sumeria"
        className="h-11 w-11 object-contain mr-4"
      />
      <div className="flex flex-col leading-tight text-center">
        <p className="text-white font-bold text-lg">Payer</p>
        <p className="text-white font-bold text-lg">avec Sumeria</p>
      </div>
    </div>
  );
};

export default Paiement;
