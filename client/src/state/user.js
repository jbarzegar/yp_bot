import { State } from 'jumpstate';

export default State({
  initial: {},
  // Actions
  setUser(state, payload) {
    return payload;
  },
});
