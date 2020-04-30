import Vue from 'vue';
import Vuex from 'vuex';

import articles from './modules/articles';
import search from './modules/search';
import session from './modules/session';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        articles,
        search,
        session
    }
});