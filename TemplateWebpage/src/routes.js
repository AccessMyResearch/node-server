import LandingPage from './components/LandingPage.vue';
import ArticleUpload from './components/ArticleUpload.vue';
import LoginPage from './components/Login.vue';
import Profile from './components/Profile.vue';

export const routes = [
    {path: '/', component: LandingPage},
    {path: '/upload', component: ArticleUpload},
    {path: '/login', component: LoginPage},
    {path: '/profile', component: Profile}
];