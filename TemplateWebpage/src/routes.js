import LandingPage from './components/LandingPage.vue';
import ArticleUpload from './components/ArticleUpload.vue';
import LoginPage from './components/Login.vue';
import Profile from './components/Profile.vue';
import Auth from './components/Auth.vue';

export const routes = [
    {path: '/', name: 'home', component: LandingPage},
    {path: '/upload', component: ArticleUpload},
    {path: '/login', component: LoginPage},
    {path: '/profile', component: Profile},
    {path: '/auth', name: 'auth', component: Auth}
];