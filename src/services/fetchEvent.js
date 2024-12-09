// fetchData.js
import { getFirestore, collection, getDocs, where } from 'firebase/firestore';
import { db } from '../firebase'; // Assure-toi que ce chemin est correct
import { query } from "firebase/firestore";


export const fetchEvent = async (collectionName, id) => {
  try {
    // Référence à la collection passée en paramètre
    const eventsRef = collection(db, collectionName);

    // Création de la requête pour filtrer par l'ID
    const q = query(eventsRef, where("id", "==", id));

    // Exécution de la requête
    const querySnapshot = await getDocs(q);

    // Extraction des données
    const eventData = [];
    querySnapshot.forEach((doc) => {
      eventData.push({ id: doc.id, ...doc.data() });
    });

    // Retourner les données (ou null si aucun résultat)
    return eventData.length > 0 ? eventData[0] : null;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    throw error;
  }
};
