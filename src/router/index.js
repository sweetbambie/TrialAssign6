import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MoviesView from '../views/MoviesView.vue';
import DetailsView from '../views/DetailsView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/register', component: RegisterView },
    { path: '/login', component: LoginView },
    { path: '/movies', component: MoviesView },
    { path: '/movies/:id', component: DetailsView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;