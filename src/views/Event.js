import React from "react";
import VSS from "../components/VSS";
import Nourriture from "../components/Nourriture";
import Boisson from "../components/Boisson";
import ListeBoissons from "../components/ListeBoissons";
import TicketBanner from "../components/TicketBanner";
import Footer from "../components/FooterEvent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEvent } from "../services/fetchEvent";
// import { useParams } from 'react-router-dom';
export default function Event() {
  
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupération des données de l'événement
  useEffect(() => {
    const getEventData = async () => {
      try {
        // Récupère tous les documents de la collection "events"
        const events = await fetchEvent("events",id);
        console.log("Événements récupérés :", events);

        // Filtre l'événement correspondant à l'ID dans l'URL
        const currentEvent = events.find((event) => event.id === id);

        if (!currentEvent) {
          throw new Error("Aucun événement trouvé pour cet ID.");
        }

        setEventData(currentEvent);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getEventData();
  }, [id]);

  const [showBanner, setShowBanner] = useState(false);

  const handleTicketClick = () => {
    setShowBanner(true); // Affiche le bandeau
  };

  const handleCloseBanner = () => {
    setShowBanner(false); // Cache le bandeau
  };

  const boissons = [
    {
      nom: "Pina Collada",
      prix: "2",
      lien: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-tropical-kamasutra.jpg",
    },
    {
      nom: "Mojito",
      prix: "3",
      lien: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-mojito.jpg",
    },
    {
      nom: "Daiquiri",
      prix: "4",
      lien: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-daiquiri.jpg",
    },
    {
      nom: "Caipirinha",
      prix: "3",
      lien: "https://www.destinationcocktails.fr/wp-content/uploads/2019/11/cocktail-caipirinha.jpg",
    },
  ];
  const burgerProps = {
    lien: "https://img.freepik.com/photos-gratuite/burger-gastronomique-grille-fromage-tomate-oignon-frites-genere-par-intelligence-artificielle_25030-63181.jpg", // Remplace par une image de burger
    nom: "Burger",
    formules: [
      { nom: "Classique", prix: 6 },
      { nom: "Végé", prix: 5 },
    ],
    infoMenu: "+1€ soft", // Information complémentaire
  };

  return (
    <div>
      <div className="bg-zinc-900 h-screen w-screen text-white" id="wrapper">
        <div
          className="flex items-center justify-between w-full px-4 py-3"
          id="header"
        >
          <i className="fa-solid fa-train-tram text-3xl"></i>
          <p className="text-2xl font-bold">Buddy</p>
          <i className="fa-solid fa-glass-cheers text-3xl"></i>
        </div>

        <div className="flex items-center justify-between w-full px-4">
          <i className="fa-solid fa-chevron-left text-white text-xl"></i>
          <div className="flex items-center space-x-2">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
            <div className="w-[255px] h-[41px] bg-white border border-gray-300 flex rounded-[21px] items-center justify-center">
              <span className="text-gray-700 text-sm font-medium">
                Soirée Halloween
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full py-3" id="infos">
          <img
            src="https://lkb-blog-images.linkaband.com/blog-musique/animation-musicale/organiser-soiree-halloween/102119-thumbnail-resized-BLOG_SEO.jpg"
            alt="soirée"
            className="w-[208px] h-[171px] object-cover rounded-r-[61px]"
          />
          <div className="flex flex-col items-end justify-center font-medium w-full h-full">
            <div className="flex items-center space-x-2">
              <p>Horaire</p>
              <i className="fa-solid fa-clock text-xl"></i>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p>Lieu</p>
              <i className="fa-solid fa-location-dot text-xl"></i>
            </div>
          </div>
        </div>

        <div className="VSS">
          <VSS VSSName="Lisa" />
        </div>
        <div className="boissons">
          <ListeBoissons boissons={boissons} />
        </div>
        <div className="nourriture">
          <Nourriture props={burgerProps} />
        </div>
        <div>
          {/* Footer */}
          <Footer onTicketClick={handleTicketClick} />

          {/* Bandeau Ticket */}
          {showBanner && <TicketBanner onClose={handleCloseBanner} />}
        </div>
      </div>
    </div>
  );
}
