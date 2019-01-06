import Vue from 'vue'
import Router from 'vue-router'
import Home from './../views/Home'
import League from '../views/League'
import Results from '../views/Results'
import AdminResultForm from '../views/admin/AdminResultForm'
import AdminHome from '../views/admin/AdminHome'
import AdminLeague from '../views/admin/AdminLeague'
import AdminResults from '../views/admin/AdminResults'
import AdminLogin from '../views/admin/AdminLogin'

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
      path: '/admin/home',
      name: 'AdminHome',
      component: AdminHome,
      props: true
    },
    {
      path: '/admin/add-result',
      name: 'AdminAddResult',
      component: AdminResultForm,
      props: true
    },
    {
      path: '/admin/league/:leagueId',
      name: 'AdminLeague',
      component: AdminLeague,
      props: true
    },
    {
      path: '/admin/league/:leagueId/distance/:distanceId',
      name: 'AdminResults',
      component: AdminResults,
      props: true
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin,
      props: true
    },
    {
      path: '/admin/edit-result/:selectedLeague/:selectedDistance/:resultId',
      name: 'AdminEditResult',
      component: AdminResultForm,
      props: true
    },
  ]
})
