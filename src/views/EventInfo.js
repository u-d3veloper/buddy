import React from 'react'
import { useParams } from 'react-router-dom';
import BoutonPlanning from '../Components/BoutonPlanning';
import Navbar from '../Components/Navbar';

export default function EventInfo() {
    let { title } = useParams();

    return (
        <div className=''>
            <div className='flex justify-center bg-gray-300 rounded m-3'>
                <p>Titre de la soirée : {title}</p>
            </div>
            <p>Ici on peut maintenant utiliser la variable id pour afficher les informations de l'événement correspondant à l'id passé en paramètre, on fait appel à la base de donnée firestore dans les services (creer un nouveau script pour cela).</p>
            <BoutonPlanning/>
            <Navbar/>
        </div>
    )
}
