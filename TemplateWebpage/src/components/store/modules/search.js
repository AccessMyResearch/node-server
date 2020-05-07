import Vue from 'vue';

const state = {
    keywords: [],
    filters: {}
};

const mutations = {
    'SET_KEYWORDS' (state, keywords) {
        state.keywords = keywords;
    },
    'SET_FILTERS' (state, filters) {
        state.filters = filters;
    }
};

const actions = {
    'searchKeywords': ({commit}) => {
        if(state.keywords[0] === "") {
            Vue.http.post('api/getPublications', {}, {headers:
            {
                'Content-Type': 'application/json'
            }}).then(response => {
                return response.json();
            }).then(data => {
                commit('SET_ARTICLES', data);
            });
        } else {
            Vue.http.post('api/getPublications', {'searchKeywords': state.keywords},
                {headers: {'Content-Type': 'application/json'
            }}).then(response => {
                return response.json();
            }).then(data => {
                commit('SET_ARTICLES', data);
            });
        }
    },
    'applyFilters': ({commit}) => {
        Vue.http.post('api/getPublications', {'filters': state.filters},
            {headers: {'Content-Type': 'application/json'
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
    },
    filters: state => {
        return state.filters;
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};