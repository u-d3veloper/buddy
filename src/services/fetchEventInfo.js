// fetchEventInfo.js
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase'; // Assure-toi que ce chemin est correct

export const fetchCollectionEventInfo = async (collectionName, id) => {
  try {
    const eventsRef = collection(db, collectionName);
    const querySnapshot = await getDocs(eventsRef);
    return querySnapshot.docs.map(
      (doc) => ({ id: doc.id, ...doc.data() })
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    throw error;
  }
};
