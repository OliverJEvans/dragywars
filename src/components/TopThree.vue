<template>
    <b-card
        class="text-center mb-3"
        :header="'Top 3 - ' + distance.name"
        header-tag="header">
        <b-table
            class="text-left"
            striped
            :fields="fields"
            :items="results"
            v-if="results.length > 0" />
    </b-card>
</template>

<script>
import db from '@/api/db';

export default {
  name: 'TopThree',
  data() {
    return {
      results: []
    }
  },
  props: {
    leagueId: String,
    distance: Object
  },
  computed: {
    fields() {
      return ["time", "name"];
    }
  },
  firestore() {
    return {
      results: db.collection('leagues/' + this.leagueId + '/distance/' + this.distance.id + '/results/').orderBy("time", "asc").limit(3)
    }
  },
}
</script>
