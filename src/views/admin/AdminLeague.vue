<template>
  <div>
    <h1 class="h4 text-center mb-3">{{ league.name }} Results</h1>

    <measurements-nav
      v-bind:activeLeagueId="leagueId"/>

  </div>
</template>

<script>
import db from '@/api/db';
import MeasurementsNav from '@/components/AdminMeasurementsNav.vue';

export default {
  name: 'league',
  data() {
    return {
      distances: [],
      league: []
    }
  },
  props: {
    leagueId: {
      type: String,
      default: 'stage-1'
    },
  },
  components: {
    'measurements-nav': MeasurementsNav,
  },
  firestore() {
    return {
      league: db.collection('leagues/').doc(this.leagueId),
      distances: db.collection('leagues/' + this.leagueId + '/distance'),
    }
  }
}
</script>
