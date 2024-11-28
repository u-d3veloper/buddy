import React from "react";

const Nourriture = () => {
  return (
    <div className="flex bg-zinc-700">
      <div id="image" className="w-1/2 ">
        <img
          id="Visuel_Nourriture"
          src="https://www.shutterstock.com/image-photo/burger-tomateoes-lettuce-pickles-on-600nw-2309539129.jpg"
          alt="burger"
          className=" w-full h-full object-cover"
        />
      </div>

      <div id="Detail_et_prix" className="w-1/2 p-4">
        <p className="text-center text-amber-500 text-2xl mb-4 mt-0">
          Burger + Frite
        </p>
        <ul className="mb-4">
          <li>
            <div className="flex justify-between">
              <p>Classique</p>
              <p>6€</p>
            </div>
          </li>
          <li>
            <div className="flex justify-between">
              <p>Vegie</p>
              <p>5€</p>
            </div>
          </li>
        </ul>
        <p id="Menu" className="text-center">
          +1€ Soft
        </p>
      </div>
    </div>
  );
};

export default Nourriture;
