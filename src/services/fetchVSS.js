import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const fetchVSS = async (collectionName, idOrDocRef) => {
  try {
    let id;

    // Vérifiez si idOrDocRef est un DocumentReference ou une chaîne
    if (typeof idOrDocRef === "string") {
      id = idOrDocRef;
    } else if (idOrDocRef && idOrDocRef.id) {
      id = idOrDocRef.id; // Extraire l'ID d'un DocumentReference
    } else {
      throw new Error(`ID invalide fourni à fetchVSS: ${JSON.stringify(idOrDocRef)}`);
    }

    // Référence au document
    const vssRef = doc(db, collectionName, id);
    const docSnap = await getDoc(vssRef);

    if (docSnap.exists()) {
      console.log("Données du document VSS :", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Document VSS non trouvé !");
      return null;
    }
  } catch (error) {
    console.error("Erreur lors de la récupération du document VSS :", error);
    throw error;
  }
};