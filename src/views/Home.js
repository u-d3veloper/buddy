import React, { useEffect, useState } from "react";
import { fetchCollection } from "../services/fetchData"; // Assure-toi que le chemin est correct

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataList = await fetchCollection("events");
        console.log("Données récupérées :", dataList);
        setData(dataList);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      } finally {
        setLoading(false);
        console.log("Données dans le state :", data);
      }
    };

    getData();
  }, [data]);
  

  return (
    <div className="bg-gray-50 h-screen">
      <div className="container flex justify-center mt-2">
        <img src="assets/images/logo_full_black.png" alt="Logo" />
      </div>
      <div className="container flex justify-center flex-col">
        {loading ? (
          <div>Chargement...</div>
        ) : (
          <ul>
            <a href="/eventInfo">
              <li className="active:bg-gray-200 border-2 border-gray-700 border-dashed rounded-3xl mx-3 my-2 py-6 flex justify-center align-center">
                <i class="fa-solid fa-plus"></i>
              </li>
            </a>
            {data.map((item) => (
              <a href={`/eventInfo/${item.id}`} key={item.id}>
                <li className="border-2 border-black rounded-3xl mx-3 p-2 flex">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-3xl object-cover h-full w-1/3 mr-2"
                  />
                  <div className="flex flex-col justify-center ml-2">
                    <h3>{item.title}</h3>
                    <p>Thème : {item.theme}</p>
                    <p>
                      Date :{" "}
                      {new Date(item.date.seconds * 1000).toLocaleDateString()}
                    </p>
                    <p>Durée : {item.duration} heures</p>
                  </div>
                </li>
              </a>
            ))}
          </ul>
        )}
      </div>
      <div className="container flex justify-around fixed bottom-0 align-center">
        <a href="/">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-bars"></i>
          </div>
        </a>
        <a href={`/event/${data[0].id}`}>
          <div className="m-2 p-2 border-2 border-black rounded-xl">
            <i className="text-4xl fa-solid fa-champagne-glasses"></i>
          </div>
        </a>
        <a href="/profile">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-user"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
