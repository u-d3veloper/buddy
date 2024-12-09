import React from "react";

const Nourriture = ({props}) => {
  return (
    <div className="ml-6 mr-12 flex mx-auto bg-zinc-700 border-solid rounded-3xl overflow-hidden">
      <div id="image" className="w-4/5 ">
        <img
          id="Visuel_Nourriture"
          src={props.lien}
          alt={props.nom}
          className=" w-full h-full object-cover  "
        />
      </div>

      <div id="Detail_et_prix" className="w-1/2 p-4 object-cover w-full">
        <p className="  text-center text-amber-500 text-xl mb-4 mt-0">
          {props.nom}
        </p>
        <ul className="mb-4 list-disc pl-5">
          {props.formules.map((formule, index) => (
            <li key={index}>
              <div className="flex justify-between mb-2">
                <p>{formule.nom}</p>
                <p>{formule.prix}€</p>
              </div>
            </li>
          ))}
        </ul>
        <p id="Menu" className="text-center ">
          {props.infoMenu}
        </p>
      </div>
    </div>
  );
};

export default Nourriture;
