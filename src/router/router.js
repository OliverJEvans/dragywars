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

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Dragy Wars - MK7 Golf R and S3 Leadboard'
      }
    },
    {
      path: '/league/:leagueId',
      name: 'League',
      component: League,
      props: true,
      meta: {
        title: 'League - Dragy Wars'
      }
    },
    {
      path: '/league/:leagueId/distance/:distanceId',
      name: 'Results',
      component: Results,
      props: true,
      meta: {
        title: 'Distance - Dragy Wars'
      }
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

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title

  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  next();
});


export default router;
