import React from 'react'
import { useParams } from 'react-router-dom';

export default function EventInfo() {
    let { title } = useParams();

    return (
        <div className=''>
            <div className='flex justify-center bg-gray-300 rounded m-3'>
                <p>Titre de la soirée : {title}</p>
            </div>
            <p>Ici on peut maintenant utiliser la variable id pour afficher les informations de l'événement correspondant à l'id passé en paramètre, on fait appel à la base de donnée firestore dans les services (creer un nouveau script pour cela).</p>
            <a href={"/planning/"+title} key={title}>
                <div className="flex justify-center">
                    <div className="box-content flex rounded-2xl h-10 w-10 p-2 border-2 border-black justify-center">
                    <i className="text-4xl fa-solid fa-file "></i>
                    </div>
                </div>
            </a>
        </div>
    )
}
