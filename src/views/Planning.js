import CSVReader from "../Components/CSVReader";

function Planning() {
  const soiree = "soiree Halloween";
  return (
    <div className="h-screen bg-white">
      <div className="container flex h-12 justify-center bg-gray-100">
      </div>
      <div className="container my-3 flex justify-center">
        <img src="assets/images/logo_full_black.png" alt="Logo" />
      </div>
      <div className="container">
        <CSVReader soiree={soiree}/>
      </div>
      <div className="container flex justify-around fixed bottom-0 align-center">
        <a href="/">
          <div className="m-2 p-2">
            <i className="text-4xl fa-solid fa-bars"></i>
          </div>
        </a>
        <a href="/event">
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
}

export default Planning;