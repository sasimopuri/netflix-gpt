import { useState } from "react";
import useFetchGPTSuggestions from "../Hooks/useFetchGPTSuggestions";
import { useSelector } from "react-redux";
import GptSuggestionMovies from "./GptSuggestionMovies";

const GptSearch = () => {
  const [query, setQuery] = useState();
  const { makeGPTCall } = useFetchGPTSuggestions();
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleGptSearch = () => {
    makeGPTCall(query);
  };


  return (
    <>
      <div className="pt-[8%] flex justify-center">
        <form
          className="w-11/12 md:w-1/2 bg-black grid grid-cols-12 p-2 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="p-4 m-2 col-span-9 bg-zinc-800 text-white rounded-md focus:outline-none"
            placeholder="Ask MovieGenie! What do you want to search?"
            onChange={handleQuery}
          />

          <button
            className="col-span-3 m-2 py-2 px-4 bg-red-600 text-white rounded-md font-bold hover:bg-red-700 cursor-pointer"
            onClick={() => handleGptSearch()}
          >
            Search
          </button>
        </form>
      </div>
        <GptSuggestionMovies />
    </>
  );
};

export default GptSearch;
