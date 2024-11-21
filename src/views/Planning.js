import React from 'react'
import Tache from '../Components/Tache.js' 
import FinDeTache from '../Components/FinDeTache.js' 

export default function Planning() {
  return (
    <div class="h-screen bg-white">
      <div class="container flex h-12 justify-center bg-gray-100"></div>
      <div class="container flex justify-center">
        <img src="assets/images/logo_full_black.png" alt="Logo" />
      </div>
      <div class="container my-5 flex justify-center text-lg font-bold">
        <p>Planning de la soirée Halloween:</p>
      </div>
      <div class="container flex justify-center">
        <div class="h-fit w-8/12 rounded-3xl border border-black bg-neutral-100 p-4">
          <Tache temps="20:00" action="Validation entrées" couleur="green-400"/>
          <Tache temps="21:30" action="Bar" couleur="purple-700"/>
          <Tache temps="23:00" action="Vestiaires" couleur="cyan-400"/>
          <Tache temps="01:00" action="Ménage" couleur="orange-200"/>
          <FinDeTache temps="01:30"/>
        </div>
      </div>
      <div className="container flex justify-around fixed bottom-0 align-center">
        <a href="/">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-bars"></i>
          </div>
        </a>
        <a href="/event">
          <div className="m-2 p-2 border-2 border-black rounded-xl">
            <i className="text-4xl fa-solid fa-champagne-glasses"></i>
          </div>
        </a>
        <a href="/profile">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-user"></i>
          </div>
        </a>
      </div>
    </div>  
  );
};