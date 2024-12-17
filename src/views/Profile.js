import React, { useState, useEffect } from 'react';
import Banner from '../Components/Banner';
import UserInfo from '../Components/UserInfo';
import { signInWithGoogle, signOutUser } from '../services/firebaseAuth';
import Navbar from '../Components/Navbar';

export default function Profile() {
  const [user, setUser] = useState(null); // État pour stocker l'utilisateur
  const [error, setError] = useState(null); // État pour gérer les erreurs

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

  const handleSignIn = async () => {
    try {
      const userInfo = await signInWithGoogle(); // Se connecter via Google
      setUser(userInfo); // Mettre à jour l'utilisateur
      setError(null); // Réinitialiser les erreurs
    } catch (err) {
      console.error('Erreur lors de la connexion :', err.message);
      setError(err.message); // Définir l'erreur
    }
  };

  const handleSignOut = async () => {
    try {
      await signOutUser(); // Se déconnecter
      setUser(null); // Réinitialiser l'utilisateur
      localStorage.removeItem('user'); // Supprimer du localStorage
      setError(null); // Réinitialiser les erreurs
    } catch (err) {
      console.error('Erreur lors de la déconnexion :', err.message);
      setError(err.message); // Définir l'erreur
    }
  };

  return (
    <div className="bg-gray-50 h-screen">
      <Banner/>
      <div className="p-4">
        {user ? ( // Si un utilisateur est connecté, afficher ses informations
          <>
            <UserInfo user={user} />
            <div className="flex justify-center">
              <button
                className="border border-red-500 rounded-3xl px-3 py-2 mt-4 bg-red-500 text-white hover:bg-red-600"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            </div>
          </>
        ) : ( // Sinon, inviter l'utilisateur à se connecter
          <>
            <h1 className="text-3xl font-bold text-center">Salut !</h1>
            <h2 className="text-xl text-center px-2 my-2">
              Connecte-toi pour commencer à faire la fête
            </h2>
            <div className="flex justify-center">
              <button
                className="border border-slate-500 rounded-3xl px-4 py-2 hover:bg-slate-200"
                onClick={handleSignIn}
              >
                <i className="fa-brands fa-google mr-3"></i>Sign in with Google
              </button>
            </div>
          </>
        )}

        {error && <p className="text-red-500 mt-4">Erreur : {error}</p>} {/* Affichage des erreurs */}
      </div>
      <Navbar />
    </div>
  );
}
