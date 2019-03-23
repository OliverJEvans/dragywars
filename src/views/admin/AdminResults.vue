<template>
  <div>
    <h1 class="h4 text-center mb-3">{{ league.name }} Results</h1>

    <measurements-nav
      v-bind:activeLeagueId="leagueId"/>

    <b-alert
      class="mt-3"
      variant="success"
      dismissible
      fade
      :show="showSuccessAlert"
      @dismissed="!showSuccessAlert">
      Result deleted
    </b-alert>
      
    <b-table
      responsive
      striped
      :fields="fields"
      :items="results"
      v-if="results">

      <template slot="id" slot-scope="row">
        <b-button
          size="sm"
          variant="secondary"
          class="mr-2"
          v-bind:to="{ name: 'AdminEditResult', params: { 'selectedLeague': leagueId, 'selectedDistance': distanceId, 'resultId': row.value }}">
          Edit
        </b-button>
        <b-button
          size="sm"
          variant="danger"
          class="mr-2"
          v-on:click="deleteResult(row.value)">
          Delete
        </b-button>
      </template>

    </b-table>

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
import MeasurementsNav from '@/components/AdminMeasurementsNav.vue';
import SubmitTimesButton from '@/components/SubmitTimesButton.vue';

export default {
  name: 'league',
  data() {
    return {
      results: [],
      league: [],
      fields: [
        {
          key: 'time',
          sortable: true
        },{
          key: 'tuner',
          sortable: true
        },{
          key: 'name',
          sortable: true
        },{
          key: 'notes'
        },{
          key: 'id',
          label: 'Actions'
        }
      ],

      showSuccessAlert: false
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
  firestore() {
    return {
      league: db.collection('leagues/').doc(this.leagueId),
      results: db.collection('leagues/' + this.leagueId + '/distance/' + this.distanceId + '/results/').orderBy("time", "asc"),
    }
  },
  methods: {
    deleteResult(id){
      console.log(id);
      db.collection('leagues/' + this.leagueId + '/distance/' + this.distanceId + '/results/').doc(id).delete().then(function() {
        this.showSuccessAlert = true;
      }).catch(function(error) {
        console.error("Error removing document: ", error);
      });
    }
  }
}
</script>
