import Vue from 'vue';

const state = {
    keywords: []
};

const mutations = {
    'SET_KEYWORDS' (state, keywords) {
        state.keywords = keywords;
    }
};

const actions = {
    'searchKeywords': ({commit}) => {
        Vue.http.post('api/getPublications', {'searchKeywords': state.keywords},
            {headers:
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
    keywords: state => {
        return state.keywords;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};