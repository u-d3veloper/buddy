import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { fetchCollectionEventInfo } from '../services/fetchEventInfo';

export default function Event() {
  const { id } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEventData = async () => {
      try {
        const events = await fetchCollectionEventInfo('events');
        const event = events.find((e) => e.id === id);
        setEventData(event);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false);
      }
    };

    getEventData();
  }, [id]);

  if (loading) return <div>Chargement...</div>;

  if (!eventData) return <div>Événement introuvable</div>;

  return (
    <div className="bg-gray-50">

      <div className="m-4 my-14">
      <Banner/>
      </div>

      <div className="flex justify-end">
        <div className="rounded-l-full px-10 py-2 bg-black shadow-lg min-w-64">
          <h1 className={`text-center text-xl uppercase text-orange-400 font-extrabold`}>{eventData.title}</h1>
        </div>
      </div>
      <div className="flex justify-normal m-4">

      </div>

      <div className="grid grid-cols-12 grid-rows-3">
        <div className="col-span-6 row-span-3">
          <img className="rounded-r-[4em] h-52 w-full object-cover" src={eventData.image} alt={eventData.title} />
        </div>

        <div className="col-span-6 p-3">
          <h2 className="text-3xl text-center font-extrabold">{new Date(eventData.date.seconds * 1000).getDay()} / {new Date(eventData.date.seconds * 1000).getMonth() + 1} / {new Date(eventData.date.seconds * 1000).getFullYear()}</h2>
        </div>
        <div className="pr-6 m-0 col-span-4">
          <p className="text-2xl text-end align-middle font-extrabold">{new Date(eventData.date.seconds * 1000).getHours()}h - {new Date(eventData.date_fin.seconds * 1000).getHours()}h</p>
        </div>
        <div className="col-span-2">
          <i className="text-3xl fa fa-clock align-middle"></i>
        </div>
        <div className="pr-6 m-0 col-span-4">
          <p className="text-2xl text-end align-middle font-extrabold">ENSC</p>
        </div>
        <div className="col-span-2">
          <i className="text-3xl fa fa-map-marker-alt"></i>
        </div>

      </div>

      <p className="text-xl mt-5 text-center font-bold">Thème : <b>{eventData.theme}</b></p>

      <h2>{eventData.location}</h2>
      <p className="text-base text-balance font-extrabold py-3 px-8">{eventData.description}</p>
      <div className="flex justify-center items-center m-2">
        <button class="bg-fuchsia-900 hover:bg-fuchsia-950 text-white text-3xl font-bold py-3 p-5 rounded-2xl"><i></i> Prends ta place </button>
      </div>
      <div>
        <Navbar />
      </div>
    </div>
  );
}


