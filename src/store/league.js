import { firebaseAction } from 'vuexfire';
import db from '@/db';

const state = {
    distances: [],
    activeDistance: [],
    activeLeague: [],
    results: []
};

const results = (leagueId, distanceId) => db.collection('leagues/' + leagueId + '/distance/' + distanceId + '/results');

const actions = {
    initDistances: firebaseAction(({ bindFirebaseRef }, leagueId) => {
        bindFirebaseRef('activeLeague', db.collection('leagues').doc(leagueId));
        bindFirebaseRef('distances', db.collection('leagues/' + leagueId + '/distance'));
    }),
    getResults: firebaseAction(({ bindFirebaseRef }, distanceId) => {
        bindFirebaseRef('activeDistance', db.collection('leagues/' + state.activeLeague.id + '/distance').doc(distanceId));
        bindFirebaseRef('results', results(state.activeLeague.id, distanceId));
    }),
    async createResult(_, time) {
        const result = results(time.league, time.distance).doc();
        await results(time.league, time.distance).doc(result.id).set(time);
    }
};

export default {
    namespaced: true,
    state,
    actions,
};

//.where('tune_id', '==', tune_id));