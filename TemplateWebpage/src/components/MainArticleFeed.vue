<template>
    <div class="middle_column article-feed">
        <app-article v-for="article in responseData.publications" :article="article"></app-article>
    </div>
</template>

<script>
import Article from './Article.vue';

export default {
    data() {
        return {
            responseData: ''
        }
    },
    mounted: function() {
        this.fetchData();
    },
    methods: {
        fetchData() {
            const t = this;
            this.$http.get('api/getPublications').then(response => { //insert next part of URL here if needed in the get()
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
        margin: 0 5px;
        flex-flow: column;
    }
</style>