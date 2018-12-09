<template>
    <b-nav pills justified class="mb-3">
        <b-nav-item
        v-for="(distance, index) in distances" 
        v-bind:key="index"
        v-bind:to="{ name: 'Results', params: { 'distanceId': distance.id }}">
        {{distance.name}}
        </b-nav-item>
    </b-nav>
</template>

<script>
import db from '@/api/db';

export default {
  name: 'MeasurementsNav',
  data() {
    return {
      distances: [],
    }
  },
  props: ['activeLeagueId'],
  firestore() {
    const activeLeagueId = this.$props.activeLeagueId;

    return {
      distances: db.collection('leagues/' + activeLeagueId + '/distance'),
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-pills {
    margin: 0 -15px;
    .nav-item {
      padding: 0 15px;
    }

    .nav-link {
      background-color: rgba(0, 0, 0, 0.03);
      &.active {
        background-color: #007bff;
      }
    }
  }
</style>

