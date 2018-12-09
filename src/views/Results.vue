<template>
  <div>
    <h1 class="h4 text-center mb-3">{{ league.name }} Results</h1>

    <measurements-nav
      v-bind:activeLeagueId="leagueId"/>
      
    <b-table
      striped
      :fields="fields"
      :items="results"
      v-if="results" />

    <div
      class="text-center">
      <p
        v-if="results.length < 1">
        There are no results yet, submit your times below.
      </p>
      <submit-times-button
        variant="primary" />
    </div>
  </div>
</template>

<script>
import db from '@/api/db';
import MeasurementsNav from '@/components/MeasurementsNav.vue';
import SubmitTimesButton from '@/components/SubmitTimesButton.vue';

export default {
  name: 'league',
  data() {
    return {
      results: [],
      league: []
    }
  },
  props: {
    leagueId: String,
    distanceId: String,
  },
  components: {
    'measurements-nav': MeasurementsNav,
    'submit-times-button': SubmitTimesButton,
  },
  computed: {
    fields() {
      return ["time", "tuner", "name", "notes"];
      // return Object.keys(Object.assign({}, ...this.results));
    }
  },
  firestore() {
    return {
      league: db.collection('leagues/').doc(this.leagueId),
      results: db.collection('leagues/' + this.leagueId + '/distance/' + this.distanceId + '/results/').orderBy("time", "asc"),
    }
  },
}
</script>
