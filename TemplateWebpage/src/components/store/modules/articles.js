import Vue from 'vue'

const state = {
    publications: []
};

const mutations = {
    'SET_ARTICLES' (state, articles) {
        state.publications = articles;
        console.log('mutate articles');
        console.log(articles);
    }
};

const actions = {
    initializeArticles: ({commit}) => {
        Vue.http.post('api/getPublications', {}, {headers:
        {
            'Content-Type': 'application/json'
        }}).then(response => {
            return response.json();
        }).then(data => {
            commit('SET_ARTICLES', data);
        });
    }
};

const getters = {
    publications: state => {
        console.log(state);
        console.log(state.publications);
        return state.publications;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};