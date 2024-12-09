import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import Navbar from "../Components/Navbar";
import Tache from '../Components/Tache.jsx' ;
import Papa from 'papaparse';
import { fetchCollection } from '../services/fetchData';

export default function Planning({soiree}) {
    const [csvData, setCsvData] = useState([]);
    const [columnIndex, setColumnIndex] = useState(null);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
  
    // Charger l'utilisateur depuis le localStorage uniquement au montage du composant
    useEffect(() => {
      console.log(localStorage.getItem('user'));
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser)); // Valider et définir l'utilisateur si trouvé
        } catch (err) {
          console.error('Erreur lors du parsing de localStorage :', err.message);
          localStorage.removeItem('user'); // Nettoyer les données corrompues
        }
      }
    }, [user]);

    // Charge le fichier CSV du planning
    const loadCSV = (soiree) => {
      Papa.parse('/planning/'+soiree+'.csv', {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: (result) => {
          setCsvData(result.data);
        },
        error: (err) => {
          setError('Error reading CSV file');
        },
      });
    };
  
    // Trouve le numéro de la colonne qui correspond à l'email de l'user
    const findColumnIndex = (header,user) => {
      const index = header.findIndex((column) => column.toLowerCase() === user.email.toLowerCase());
      if (index !== -1) {
        setColumnIndex(index);
      } else {
        setError('Column not found');
      }
    };
   
    // Affiche les tâches que doit faire l'user
    const RowProcessor = ({ row, value}) => {
      if (value === 1) {
        return (
          <div>
            <Tache Color={row.Couleur} HeureDebut={row.HeureDebut} HeureFin={row.HeureFin} action={row.Taches} />
          </div>
        );
      } else {
        return null;
      }
    };

    useEffect(() => {
      loadCSV(soiree);
      const storedUser = localStorage.getItem('user');
      if (csvData.length && storedUser) {
        const headers = Object.keys(csvData[0]);
        findColumnIndex(headers,user);
      }
    }, [csvData]);

  return (
    <div className="h-screen bg-gray-50">
      <div className="container flex h-12 justify-center bg-gray-100">
      </div>
      <Banner/>
      <div className="container">
        {user ? (
          <div>
            <div className="container flex justify-center text-lg font-bold">
                <p>Planning de {soiree}</p>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {columnIndex !== null && (
              <div className="container mt-5 flex justify-center">
                  <div className="h-fit w-8/12 rounded-3xl border border-black bg-neutral-100 p-4">
                      {csvData.map((row, index) => {
                          const value = row[Object.keys(row)[columnIndex]];
                          return (
                              <RowProcessor row={row} value={value}/>
                          );
                      })}
                  </div>
              </div>
            )};
          </div>
        ):(
          <div className="container flex justify-center text-lg font-bold">
                <p>Vous n'êtes pas connécté</p>
          </div>
        )}
      </div>
      <Navbar/>
      </div>
  );
}
