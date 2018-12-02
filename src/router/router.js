import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home'
import League from '../views/League'
import Results from '../views/Results'
import AddResult from '../views/AddResult'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/league/:leagueId',
      name: 'League',
      component: League,
      props: true
    },
    {
      path: '/league/:leagueId/distance/:distanceId',
      name: 'Results',
      component: Results,
      props: true
    },
    {
      path: '/add-result',
      name: 'AddResult',
      component: AddResult,
      props: true
    }
  ]
})
