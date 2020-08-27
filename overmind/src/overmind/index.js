import { createHook } from 'overmind-react';

export const config = {
  state: {
    terms: ["SSR", "PWA"],
  },
  actions: {
    addTerm({ state }, term) {
      state.terms = [term, ...state.terms];
    },
    removeTerm({ state }, indexToDelete) {
      state.terms = state.terms.filter((_, idx) => indexToDelete !== idx)
    },
  },
};

export const useOvermind = createHook();
