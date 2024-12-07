// src/components/RowProcessor.js
import React from 'react';
import Tache from '../Components/Tache.js' ;

const RowProcessor = ({ row, value}) => {
  if (value === 1) {
    return (
      <div>
        <Tache HeureDebut={row.HeureDebut} HeureFin={row.HeureFin} action={row.Taches} couleur={row.Couleur}/>
      </div>
    );
  } else {
    return null; // Ignore if the value is neither 0 nor 1.
  }
};

export default RowProcessor;