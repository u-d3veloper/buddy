import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const db = getFirestore(); // Initialisation Firestore

// Fonction pour se connecter avec Google
export const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({ login_hint: 'prenom.nom@ensc.fr' });

    try {
        // Authentification Google
        const result = await signInWithPopup(auth, provider);
        const { user } = result;

        // Récupération des informations utilisateur
        const userData = {
            uid: user.uid,
            firstName: user.displayName.split(' ')[0],
            lastName: user.displayName.split(' ')[1] || '',
            email: user.email,
            tel: user.phoneNumber || '',
            photoURL: user.photoURL,
            admin: false, // Valeur par défaut
            bda: false,
            bde: false,
            bds: false,
            fidelityPoints: 0,
            junior: false,
            vss: false,
        };

        // Référence de l'utilisateur dans Firestore
        const userRef = doc(db, 'users', user.uid);

        // Vérification si l'utilisateur existe déjà
        const userSnapshot = await getDoc(userRef);

        if (!userSnapshot.exists()) {
            // Si l'utilisateur n'existe pas, l'ajouter
            await setDoc(userRef, userData);
            console.log('Utilisateur ajouté à la base de données :', userData);
        } else {
            console.log('Utilisateur déjà présent dans la base de données');
        }

        // Stocker les informations essentielles dans le localStorage
        localStorage.setItem('user', JSON.stringify({
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            admin: userSnapshot.exists() ? userSnapshot.data().admin : false,
        }));

        console.log('Utilisateur connecté et stocké dans le localStorage');
    } catch (error) {
        console.error('Erreur lors de la connexion avec Google :', error.message);
        throw new Error(error.message);
    }
};

// Fonction pour vérifier si un utilisateur est connecté
export const getCurrentUser = () => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null; // Retourne null si aucune donnée n'est stockée
};

// Fonction pour se déconnecter
export const signOutUser = async () => {
    const auth = getAuth();
    try {
        await signOut(auth);

        // Supprimer les données utilisateur du localStorage
        localStorage.removeItem('user');
        console.log('Utilisateur déconnecté et localStorage nettoyé');
    } catch (error) {
        console.error('Erreur lors de la déconnexion :', error.message);
        throw new Error(error.message);
    }
};
