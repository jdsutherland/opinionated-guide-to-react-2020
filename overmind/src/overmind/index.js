import { createHook } from 'overmind-react';

export const config = {
  state: {
    terms: ["SSR", "PWA"],
  },
  actions: {
    // anything to transform the state
  },
};

export const useOvermind = createHook();
