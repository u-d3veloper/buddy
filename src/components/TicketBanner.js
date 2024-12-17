import React from "react";

const TicketBanner = ({ onClose }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-3/5 bg-white rounded-t-3xl flex flex-col items-center text-center shadow-lg">
      {/* Barre cliquable en haut */}
      <div
        className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1.5 bg-gray-700 rounded-full cursor-pointer "
        onClick={onClose}
      ></div>

      {/* Contenu principal */}
      <div className="mt-8">
        {/* Numéro de ticket de soirée */}
        <p className="text-black font-bold text-lg mb-10 mt-20">
          Ton numéro de ticket de soirée
        </p>
        <div className="bg-black text-white text-4xl font-bold px-8 py-4 rounded-xl mb-10">
          4056
        </div>
      </div>

      {/* Ticket vestiaire */}
      <div className="mt-8">
        <p className="text-black font-bold text-lg mb-10">
          Ton ticket vestiaire
        </p>
        <div className="relative inline-block bg-black text-white text-4xl font-bold px-8 py-4">
          <div className="absolute top-0 left-0 w-0 h-0  border-b-transparent mb-4"></div>
          <span>19</span>
        </div>
      </div>
    </div>
  );
};

export default TicketBanner;
