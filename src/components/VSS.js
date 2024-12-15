import React, { useState } from "react";
import { useEffect } from "react";
import { fetchVSS } from "../services/fetchVSS";

export default function VSS({ VSSInfos }) {
  const [dataVSS, setDataVSS] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getData = async () => {
      if (!VSSInfos) {
        console.error("Aucun VSSInfos fourni !");
        setLoading(false);
        return;
      }

      try {
        const dataList = await fetchVSS("users", VSSInfos);
        console.log("Données récupérées VSS :", dataList);
        setDataVSS(dataList);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données VSS :",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [VSSInfos]);

  return (
    <div className="relative">
      {/* Overlay sombre avec transition */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={toggleDropdown} // Permet de fermer si on clique sur l’overlay
        ></div>
      )}

      {/* Conteneur principal (toujours visible et interactif) */}
      <div
        className={`relative z-50 w-[278px] bg-[#6C185B] text-white rounded-[21px] shadow-md overflow-hidden transition-all duration-300 ${
          isOpen ? "h-auto" : "h-[41px]"
        } mx-auto mt-5`}
      >
        {/* Bouton toujours fixe */}
        <div className="h-[41px] flex items-center justify-center gap-2">
          <button
            onClick={toggleDropdown}
            className="w-full h-full flex items-center justify-center gap-2 transition duration-300 font-lalezar text-[25.21px]"
          >
            <span>Lutte Anti-VSS</span>
            {/* Icône dynamique */}
            <i
              className={`fas ${
                isOpen ? "fa-chevron-up" : "fa-chevron-down"
              } text-[20px]`}
            ></i>
          </button>
        </div>

        {/* Contenu déroulant */}
        {isOpen && (
          <div className="mt-2 p-4 text-sm text-center font-lalezar text-[25.21px]">
            <p>
              Valeur saisie : <strong>{VSSInfos || "Aucune donnée"}</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Il faut que le composant soit en ovrlay sur le reste de la page (pour l'instant ca bouge) et que titou mette la police sur tailwind
