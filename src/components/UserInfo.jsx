import React from 'react';
import ListOptions from './userOptions/ListOptions';

export default function UserInfo({ user }) {
    return (
        <div className="mt-4">
            {/* Image utilisateur */}
            <img
                src={user.photoURL}
                alt="User Avatar"
                className="rounded-full mt-2 mx-auto"
                style={{ width: '180px' }}
            />

            {/* Message de bienvenue */}
            <h2 className="text-2xl font-semibold text-center my-4">
                Bienvenue, <span className="text-blue-700">{user.displayName.split(" ")[0]}</span>
            </h2>
            <p className="text-center text-gray-600 text-xl">Prêt à faire la fête ?</p>
            {/* Liste d'options */}
            <ListOptions user={user} />
        </div>
    );
}
