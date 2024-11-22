import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { signOut } from 'firebase/auth';

export default function Profile() {
  const [user, setUser] = useState(null); // État utilisateur
  const [error, setError] = useState(null); // État pour gérer les erreurs

  const handleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    // Ajouter des paramètres personnalisés si nécessaire
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    provider.setCustomParameters({
      login_hint: 'prenom.nom@ensc.fr',
    });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Utilisateur connecté:', user);

      // Mettre à jour l'état utilisateur
      setUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    } catch (err) {
      console.error('Erreur lors de la connexion:', err.message);
      setError(err.message); // Stocker le message d'erreur pour l'afficher
    }
  };

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      setUser(null); // Réinitialiser l'état utilisateur
      console.log('Utilisateur déconnecté');
    } catch (err) {
      console.error('Erreur lors de la déconnexion:', err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Profile</h1>
      <button
        className="border border-slate-500 rounded p-2 hover:bg-slate-200"
        onClick={handleSignIn}
      >
        Sign in with Google
      </button>

      {user ? (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Bienvenue, {user.displayName}!</h2>
          <p>Email : {user.email}</p>
          <img
            src={user.photoURL}
            alt="User Avatar"
            className="rounded-full mt-2"
            style={{ width: '50px', height: '50px' }}
          />
        </div>
      ) : (
        <p className="text-gray-500 mt-4">Aucun utilisateur connecté.</p>
      )}

      {error && (
        <p className="text-red-500 mt-4">Erreur : {error}</p>
      )}
      <button
        className="border border-red-500 rounded p-2 mt-4 hover:bg-red-200"
        onClick={handleSignOut}
      >
        Sign out
      </button>
    </div>
  );
}
