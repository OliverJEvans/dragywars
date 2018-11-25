<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-brand href="#">DragyWars</b-navbar-brand>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item
            v-for="(league, index) in leagues" 
            v-bind:key="index"
            v-bind:to="{ name: 'league', params: { leagueId: league.id }}">
            {{league.name}}
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-button variant="primary">Submit your time</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <b-container class="pt-3">
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  mounted() {
    this.initLeagues();
  },
  computed: mapState('leagues', ['leagues']),
  methods: mapActions('leagues', ['initLeagues']),
};
</script>