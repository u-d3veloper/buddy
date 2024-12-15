import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase"; // Assurez-vous que ce chemin est correct

export const fetchEvent = async (collectionName, id) => {
  try {
    // Validation des paramètres
    if (!collectionName || typeof collectionName !== "string") {
      throw new Error("Le nom de la collection est invalide.");
    }
    if (!id || typeof id !== "string") {
    console.log(id);

      throw new Error("L'ID fourni est invalide.");
    }


    // Référence au document
    const docRef = doc(db, collectionName, id);

    // Récupération du document
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Données du document récupérées :", docSnap.data());
      return { id: docSnap.id, ...docSnap.data() }; // Ajout de l'ID au résultat
    } else {
      console.warn(
        `Aucun document trouvé pour l'ID "${id}" dans la collection "${collectionName}".`
      );
      return null; // Retourne null si le document n'existe pas
    }
  } catch (error) {
    console.error(
      `Erreur lors de la récupération du document "${id}" dans la collection "${collectionName}" :`,
      error
    );
    throw new Error(
      `Impossible de récupérer le document "${id}" : ${error.message}`
    );
  }
};
