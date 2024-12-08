// src/components/RowProcessor.js
import React from 'react';
import Tache from './Tache.jsx' ;

const RowProcessor = ({ row, value}) => {
  if (value === 1) {
    return (
      <div>
        <Tache Color={row.Couleur} HeureDebut={row.HeureDebut} HeureFin={row.HeureFin} action={row.Taches} />
      </div>
    );
  } else {
    return null; // Ignore if the value is neither 0 nor 1.
  }
};

export default RowProcessor;