<template>
  <div class="home">
    <router-link
      class="btn btn-primary btn-lg btn-block py-3"
      v-for="(league, index) in leagues"
      v-bind:key="index"
      v-bind:to="'/league/' + league.id">
      {{ league.name }}
    </router-link>
  </div>
</template>

<script>
import db from '@/api/db';

export default {
  data() {
    return {
      leagues: []
    }
  },
  firestore: {
    leagues: db.collection('leagues'),
  }
};
</script>
