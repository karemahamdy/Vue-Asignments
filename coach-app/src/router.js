import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/Coaches/CoachDetail.vue';
import CoachesList from './pages/Coaches/CoachesList.vue';
import CoachRegistation from './pages/Coaches/CoachRegistration.vue';
import ContactCoach from './pages/Requests/ContactCoach.vue';
import RequestsReceived from './pages/Requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachesList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [
        { path: 'contact', component: ContactCoach } 
      ]
    },
    { path: '/register', component: CoachRegistation },
    { path: '/requests', component: RequestsReceived },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
