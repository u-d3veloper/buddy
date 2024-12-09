import React from "react";
import VSS from "../components/VSS";
import Nourriture from "../components/Nourriture";
import Boisson from "../components/Boisson";
import ListeBoissons from "../components/ListeBoissons";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchEvent } from "../services/fetchEvent";
// import { useParams } from 'react-router-dom';
export default function Event() {
let { id } = useParams();
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
  const getData = async () => {
    try {
      const dataList = await fetchEvent('events',id);
      console.log('Données récupérées :', dataList);
      setData(dataList);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    } finally {
      setLoading(false);
      console.log('Données dans le state :', data);
    }
  };

  getData();
}, []);

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



  return (
    <div>
      <div className="bg-zinc-800	r h-screen w-screen text-white	" id="wrapper">
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
                Texte à l'intérieur
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

<div className="flex flex-col  items-end justify-center font-medium w-full h-full ">
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
          {" "}
          <ListeBoissons boissons={boissons} />{" "}
        </div>
        <div className="nourriture"></div>
        <div className="footer">
          <p> vestiaire, summeria</p>
        </div>
      </div>
    </div>
  );
}
