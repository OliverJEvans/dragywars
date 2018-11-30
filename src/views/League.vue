<template>
  <div>
    <measurements-nav
      v-bind:activeLeagueId="leagueId"/>
  </div>
</template>

<script>
import MeasurementsNav from '@/components/MeasurementsNav.vue';

export default {
  name: 'league',
  props: {
    leagueId: {
      type: String,
      default: 'stage-1'
    },
  },
  components: {
    'measurements-nav': MeasurementsNav,
  }
}
</script>
