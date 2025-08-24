export const TMDB_API_OPTIONS ={
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " +import.meta.env.VITE_TMDB_KEY,
  },
};

export const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY