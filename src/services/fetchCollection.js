import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase"; // Assurez-vous que ce chemin est correct

export const fetchCollection = async (collectionName) => {
  try {
    // Validation du nom de la collection
    if (!collectionName || typeof collectionName !== "string") {
      throw new Error("Le nom de la collection est invalide.");
    }

    // Référence à la collection
    const colRef = collection(db, collectionName);

    // Récupération des documents
    const querySnapshot = await getDocs(colRef);

    // Gestion des collections vides
    if (querySnapshot.empty) {
      console.warn(`La collection "${collectionName}" est vide.`);
      return [];
    }

    // Conversion des documents en tableau
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de la collection "${collectionName}" :`,
      error
    );
    throw new Error(
      `Impossible de récupérer la collection "${collectionName}": ${error.message}`
    );
  }
};
