import Vue from 'vue'

const state = {
    publications: []
};

const mutations = {
    'SET_ARTICLES' (state, articles) {
        state.publications = articles;
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
        return state.publications;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};