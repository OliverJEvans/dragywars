import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
  leagues: [],
};

const actions = {
  initLeagues: firebaseAction(({ bindFirebaseRef }) => {
    bindFirebaseRef('leagues', db.collection('leagues'));
  }),
};

export default {
  namespaced: true,
  state,
  actions,
};

