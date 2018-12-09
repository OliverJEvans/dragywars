<template>
  <div>
    <measurements-nav
      v-bind:activeLeagueId="leagueId"/>

    <b-row>
      <b-col
        v-for="(distance, index) in distances"
        v-bind:key="index"
        cols="12"
        md="4">
        <top-three
          v-bind:distance="distance"
          v-bind:leagueId="leagueId" />
      </b-col>
    </b-row>

  </div>
</template>

<script>
import db from '@/api/db';
import MeasurementsNav from '@/components/MeasurementsNav.vue';
import TopThree from '@/components/TopThree.vue';

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
    'top-three': TopThree
  },
  firestore() {
    return {
      league: db.collection('leagues/').doc(this.leagueId),
      distances: db.collection('leagues/' + this.leagueId + '/distance'),
    }
  }
}
</script>
