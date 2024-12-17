import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useParams } from 'react-router-dom';


export default function BoutonPlanning() {
  const [csvData, setCsvData] = useState([]);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  let { title } = useParams();

  // Charger l'utilisateur depuis le localStorage uniquement au montage du composant
    const connexion = () => {
      if (!user){
      console.log(localStorage.getItem('user'));
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
          setUser(JSON.parse(storedUser).email); // Valider et définir l'utilisateur si trouvé
      } else {
        setUser("pas enregistré");
      }}};

    // Charge le fichier CSV du planning
    const loadCSV = (title) => {
      Papa.parse('/planning/'+title+'.csv', {
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
  

  const findColumnIndex = (header,user) => {
    const index = header.findIndex((column) => column.toLowerCase() === user.toLowerCase());
    if (index !== -1) {
      setIsEmailValid(true);
    } else {
      setError('Column not found');
      setIsEmailValid(false);
    }
  };
 

  useEffect(() => {
    connexion();
    loadCSV(title);
    const storedUser = localStorage.getItem('user');
    if (csvData.length && storedUser) {
      const headers = Object.keys(csvData[0]);
      findColumnIndex(headers,user);
    }
  }, [csvData]);

  return (
    <div>
      {isEmailValid && 
        <a href={"/planning/"+title} key={title}>
          <div className="flex justify-center">
            <div className="box-content flex rounded-2xl h-10 w-10 p-2 border-2 border-black justify-center">
              <i className="text-4xl fa-solid fa-file "></i>
            </div>
          </div>
        </a>}
    </div>
  );
};