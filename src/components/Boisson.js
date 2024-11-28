import React from "react";

const Boisson = ({ nom, prix, lien }) => {
  return (
    <div className="w-1/4 bg-zinc-700 rounded-3xl shadow-lg flex-shrink-0 text-center">
      {/* Nom de la boisson */}
      <p className="p-1 ">{nom}</p>

      {/* Image */}
      <div id="image" className="overflow-hidden">
        <img
          id="Visuel_Boisson"
          src={lien}
          alt={nom}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Prix */}
      <div id="Prix" className="bg-zinc-600 p-2 rounded-b-3xl">
        <p className="text-center text-xl">{prix}€</p>
      </div>
    </div>
  );
};

export default Boisson;
