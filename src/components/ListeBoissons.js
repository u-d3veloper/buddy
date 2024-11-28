import React from "react";
import Boisson from "./Boisson";

const ListeBoissons = ({ boissons }) => {
  return (
    <div className="overflow-x-auto flex space-x-8 p-4 rounded-lg shadow-inner">
      {boissons.map((boisson, index) => (
        <Boisson
          key={index}
          nom={boisson.nom}
          prix={boisson.prix}
          lien={boisson.lien}
        />
      ))}
    </div>
  );
};

export default ListeBoissons;
