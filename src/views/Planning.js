import CSVReader from "../Components/CSVReader";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

export default function Planning({soiree, user}) {
  return (
    <div className="h-screen bg-white">
      <div className="container flex h-12 justify-center bg-gray-100">
      </div>
      <Banner/>
      <div className="container">
        <CSVReader soiree={soiree} user={user}/>
      </div>
      <Navbar/>
      </div>
  );
}
