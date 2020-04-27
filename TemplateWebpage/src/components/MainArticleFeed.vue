<template>
    <div class="middle_column article-feed">
        <app-article v-for="article in articles.publications" :article="article"></app-article>
    </div>
</template>

<script>
import Article from './Article.vue';

export default {
    created() {
        this.$store.dispatch('initializeArticles');
    },
    computed: {
        articles() {
            return this.$store.getters.publications;
        }
    },
    methods: {
        fetchData() {
            const t = this;
            this.$http.post('api/getPublications', {}, {headers:
            {
                'Content-Type': 'application/json'
            }}).then(response => {
                return response.json();
            }).then(data => {
                t.responseData = data;
            });
        }
    },
    components: {
        appArticle: Article
    }
}
</script>

<style scoped>
    .article-feed {
        padding-left: 5px;
        padding-right: 5px;
        flex-flow: column;
        overflow-y: scroll;
    }
    .article-feed::-webkit-scrollbar {
        display: none;
    }
</style>