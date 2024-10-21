import React from "react";
// Cloud Firebase imports

const Home = () => {
  // Firebase Cloud Firestore
  return (
    <div className="m-6 text-center p-6">
      <h1 className="font-bold text-blue-600 text-4xl hover:text-blue-700">
        Hello, I'm buddy.
      </h1>
      <p className="text-gray-500 text-lg">
        I'm a React app with Firebase Cloud Firestore.
      </p>
    </div>
  );
};

export default Home;
