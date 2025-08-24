import { GoogleGenAI } from "@google/genai";

import { GEMINI_API_KEY } from "../utils/constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSuggestions } from "../utils/gptSuggestionsSlice";

const useFetchGPTSuggestions = () => {
  const dispatch = useDispatch();

  const makeGPTCall = async (query) => {
    if (!GEMINI_API_KEY) {
      console.warn(
        "No GEMINI_API_KEY available in client. Ensure .env has VITE_GEMINI_API_KEY"
      );
      return;
    }

    if (!query) {
      return;
    }

    let prompt = `You are an expert movie recommendation engine.
                  Your task is to suggest exactly 5 movie titles based on the user's query.
                  The user's query is: "${query}"
                  Your response MUST contain ONLY the movie titles, separated by commas.
                  DO NOT add any introductory text like "Here are some movies:" or any explanations.
                  Example format: Movie One, Movie Two, Movie Three, Movie Four, Movie Five`;

    const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
      });
      dispatch(addSuggestions(response.text));
    } catch (err) {
      console.error("GenAI error:", err);
    }
  };
  return { makeGPTCall };
};

export default useFetchGPTSuggestions;
