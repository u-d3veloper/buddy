import React from "react";
import VSS from "../components/VSS";
import Nourriture from "../components/Nourriture";
// import { useParams } from 'react-router-dom';
export default function Event() {
  return (
    <div>
      <div class="bg-zinc-800	r h-screen w-screen text-white	" id="wrapper">
        <div
          class="flex items-center justify-between w-full px-4 py-3"
          id="header"
        >
          <i class="fa-solid fa-train-tram text-3xl"></i>

          <p class="text-2xl font-bold">Buddy</p>

          <i class="fa-solid fa-glass-cheers text-3xl"></i>
        </div>

        <div class="flex items-center justify-between w-full px-4">
          <i class="fa-solid fa-chevron-left text-white text-xl"></i>

          <div class="flex items-center space-x-2">
            <div class="w-2.5 h-2.5 bg-red-500 rounded-full"></div>

            <div class="w-[255px] h-[41px] bg-white border border-gray-300 flex rounded-[21px] items-center justify-center">
              <span class="text-gray-700 text-sm font-medium">
                Texte à l'intérieur
              </span>
            </div>
          </div>
        </div>
        <div class="flex items-center w-full py-3" id="infos">
          <img
            src="https://lkb-blog-images.linkaband.com/blog-musique/animation-musicale/organiser-soiree-halloween/102119-thumbnail-resized-BLOG_SEO.jpg"
            alt="Image soirée"
            class="w-[208px] h-[171px] object-cover rounded-r-[61px]"
          />

<div class="flex flex-col justify-center items-end text-lg font-medium w-full h-full">
    <div class="flex items-center space-x-2">
        <p>Horaire</p>
        <i class="fa-solid fa-clock text-xl"></i>
    </div>
    <div class="flex items-center space-x-2">
        <p>Lieu</p>
        <i class="fa-solid fa-location-dot text-xl"></i>
    </div>
</div>

        </div>

        <div className="VSS">
          <VSS VSSName="Lisa" />
        </div>
        <div className="boissons"> carroussel des boissons </div>
        <div className="nourriture">
          <Nourriture />{" "}
        </div>
        <div className="footer">
          <p> vestiaire, summeria</p>
        </div>
      </div>
    </div>
  );
}
