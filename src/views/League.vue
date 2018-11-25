<template>
  <div>
    <h1>{{ activeLeague.name }}</h1>

    <b-card no-body class="mb-3">
      <b-tabs card>
        <b-tab
          v-for="(distance, index) in distances"
          v-bind:key="index"
          v-bind:title="distance.name"
          v-on:click="getResults(distance.id, activeLeague.id)">
          <b-table 
            striped
            responsive
            v-bind:items="filteredResults"/>
        </b-tab>
      </b-tabs>
    </b-card>

    <div class="text-center"> 
      <b-button 
        variant="primary">
        Submit your time
      </b-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('league', ['distances']),
    ...mapState('league', ['activeLeague']),
    ...mapState('league', ['results']),
    filteredResults: function() {
      var newArray = [];
      this.results.forEach((result) => {
        var newObject = {}
        newObject.name = result.name;
        newObject.time = result.time;
        newObject.tuner = result.tuner;
        newArray.push(newObject);
      })
      return newArray;
    }
  },
  created() {
    this.initDistances(this.$route.params.leagueId);
  },
  watch: {
    '$route.params.leagueId'() {
      this.initDistances(this.$route.params.leagueId);
    }
  },
  methods: mapActions('league', ['initDistances', 'getResults'])
}
</script>
