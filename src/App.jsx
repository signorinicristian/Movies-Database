import React, { useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import axios from "axios";
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });

  const apiurl = "http://www.omdbapi.com/?apikey=ea1d1447"; // Actualizar con el ID de IMDb correcto

  const handleInput = (e) => {
    let s = e.target.value;

    setState((prevState) => {
      return {
        ...prevState,
        s: s
      };
    });

    console.log(state.s);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        if (data.Response === "True") {
          let results = data.Search;
          setState((prevState) => {
            return { ...prevState, results: results };
          });
        } else {
          setState((prevState) => {
            return { ...prevState, results: [] };
          });
        }
        e.target.value = "";
      });
    }
  };

  const openPopup = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div className="w-[100%]">
      <header className="h-24 w-full bg-gradient-to-b from-[black] to-[#33050d] flex flex-col md:flex-row items-center md:justify-between font-geologica">
        <div className="flex items-center mx-6 hover:scale-110 duration-300 my-4 md:my-0">
          <BiCameraMovie size={30} className="text-white" />
          <h1 className="text-2xl mx-2 text-white">Movies Database</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for a movie!"
            className="mx-6 outline-none rounded-full py-2 px-4 hover:scale-110 duration-300"
            onChange={handleInput}
            onKeyPress={search}
          />
        </div>
      </header>
      <main
        className={`flex justify-center ${
          state.results.length ? "h-auto" : "h-screen"
        } items-center bg-gradient-to-b from-[#33050d] to-[#4f1d1d]`}
      >
        {state.results.length ? (
          <Results results={state.results} openPopup={openPopup} />
        ) : (
          <div className="flex flex-col justify-center items-center font-bold text-white font-geologica hover:scale-110 duration-300">
            <h1 className="text-lg md:text-2xl my-1">
              Search for any movie you want!
            </h1>
            <h2 className="text-lg md:text-2xl my-1">Any movie.</h2>
          </div>
        )}
        {typeof state.selected.Title !== "undefined" && (
          <Popup selected={state.selected} closePopup={closePopup} />
        )}
      </main>
    </div>
  );
}

export default App;
