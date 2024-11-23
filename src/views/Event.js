import React from 'react'
import VSS from '../components/VSS'

export default function Event() {
  return (
    <div >
     
      <div class="bg-zinc-800	r h-screen w-screen text-white	" id="wrapper"> 
        <div className= "header"> 
          <i class="fa-solid fa-train-tram"></i>
          <p>Tram, accueil et taux d'alcoolémie</p>
        </div>
        <div className="navbar"> 
          <p> bouton retour, nom de la soirée+ point si actif</p>
        </div>
        <div className="infos"> 
          <p>image, horaires, lieu</p>
        </div>
        <div className="VSS"> 
          <VSS/>
        </div>
        <div className="boissons"> carroussel des boissons </div>
        <div className="nourriture"> </div>
        <div className="footer"> 
          <p> vestiaire, summeria</p>
        </div>
      </div>

    </div>
    
  )
}
