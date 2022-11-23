import { useReducer } from "react";
import {
  UPDATE_PETS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_PETS
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PETS:
      return {
        ...state,
        products: [...action.products],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_PETS:
      return {
        ...state,
        currentPets: action.currentPets
      }

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}
