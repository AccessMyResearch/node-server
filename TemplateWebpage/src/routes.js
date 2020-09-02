import LandingPage from './components/LandingPage.vue';
import ArticleUpload from './components/ArticleUpload.vue';
import LoginPage from './components/Login.vue';
import Profile from './components/Profile.vue';
import Settings from './components/Settings.vue';
import DragDropPublication from './components/DragDropPublication.vue';
import CreateNewProject from './components/CreateNewProject.vue';
import Auth from './components/Auth.vue';

export const routes = [
    {path: '/', name: 'home', component: LandingPage},
    {path: '/upload', component: ArticleUpload},
    {path: '/login', component: LoginPage},
    {path: '/profile', component: Profile},
    {path: '/settings', component: Settings},
    {path: '/dragdroppublication', component: DragDropPublication},
    {path: '/createnewproject', component: CreateNewProject},
    {path: '/auth', name: 'auth', component: Auth}
];