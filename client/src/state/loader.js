import { State } from 'jumpstate';

export default State({
  initial: true,
  // Action
  showLoader() {
    return true;
  },
  hideLoader() {
    return false;
  },
});
