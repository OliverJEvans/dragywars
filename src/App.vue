<template>
  <div id="app">
    <!-- NAV -->
    <b-navbar toggleable="md" type="light" variant="light" class="header">
      <b-container>
        <router-link to="/">
          <b-navbar-brand class="font-weight-bold">DragyWars</b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item
              v-for="(league, index) in leagues" 
              v-bind:key="index"
              v-bind:to="'/league/' + league.id">
              {{league.name}}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav pill class="ml-auto">
            <b-button variant="primary" target="_blank" href="https://boltonmods.co.uk/products/dragy-gps-race-timer-uk">Get Dragy</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <!-- END NAV -->

    <b-container class="page-content pt-3">
      <router-view :key="$route.path" />
    </b-container>

    <footer class="footer bg-light">
      <b-container class="py-3 text-right">
        <span class="text-muted font-weight-light small">Made with &#9829; by <a href="mailto:contact@oliverjevans.com">Oliver</a></span>
      </b-container>
    </footer>
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

<style lang="scss">
  html, body {
    min-height: 100%;
    height: 100%;
  }

  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .page-content {
    flex: 1;
  }

  .header, .footer {
    flex-shrink: 0;
  }
</style>
