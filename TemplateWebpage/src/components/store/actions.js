import Vue from 'vue';

export const loadArticles = ({commit}) => {
    Vue.http.post('API/getPublications', {}, {headers:
        {'Content-Type':'application/json'}}).then(response =>
            response.json()).then(data => {
        if(data) {
            const title = data.title;
            const doi = data.doi;
            const url = data.url;
            const date = data.publicationDate;
            const summary = data.summary;

            const authors = data.authors;

            commit('LOAD_ARTICLES', data);
        }
    });
};
