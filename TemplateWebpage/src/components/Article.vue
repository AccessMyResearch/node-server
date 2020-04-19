<template>
    <div class="article-card" @click="showArticle = !showArticle">
        <div class="article-card-head">
            <div class="article-card-middle">
                <h5 class="article-title">
                    <a :href="article.url">{{article.title}}</a>
                </h5>
                <div class="article-info text-muted">
                    <p>
                        <span v-for="(author, index) in article.authors">
                          {{author}}
                          <span id="author comma" v-if="index != article.authors.length - 1">,</span>
                        </span>
                    </p>
                    <p>{{article.doi}}</p>
                    <p>{{article.publicationDate}}</p>
                </div>
            </div>
            <div class="article-card-right">
                <div class="arrow-container">
                    <i class="fas fa-chevron-down" v-if="!showArticle"></i>
                    <i class="fas fa-chevron-up" v-else></i>
                </div>
            </div>
        </div>
        <transition name="expand">
            <div class="article-card-body" v-if="showArticle">
                <div class="article-card-middle">
                    <p class="article-card-abstract">Abstract: {{article.summary}}</p>
                </div>
                <div class="article-card-right">
                    <div class="expanded-card-icons">
                        <i class="fas fa-eye"></i>
                        <i class="fas fa-download"></i>
                        <i class="fas fa-link"></i>
                        <i class="fas fa-envelope"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        props: ["article"],
        data() {
            return {
                showArticle: false
            };
        }
    };
</script>

<style scoped>
    .article-card {
        width: 100%;
        max-width: 800px;
        padding: 5px;
        margin: 5px auto 0;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background-color: var(--card-background);
        color: var(--card-text);
    }

    .article-card-head {
        width: 100%;
        display: flex;
    }

    .article-card-body {
        max-height: 600px; /*TODO: This is a temporary hack and needs to be fixed;*/
        width: 100%;
        display: flex;
    }

    .article-card-middle {
        flex-grow: 1;
        margin-left: var(--article-card-padding);
    }

    .article-card-right {
        flex: 0 0 var(--article-card-padding);
        display: flex;
        flex-flow: column;
    }

    .article-title {
        text-align: center;
    }

    .article-info {
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .article-info p {
        margin: 0 5px;
    }

    .arrow-container {
        width: fit-content;
        margin: auto;
    }

    .article-card-abstract {
        text-align: justify;
    }

    .expanded-card-icons {
      display: flex;
      flex-flow: column;
      width: 100%;
    }

    .expanded-card-icons .fas {
      width: fit-content;
      margin: 5px auto;
    }

    p, h5 {
        margin-bottom: 0;
    }

    .expand-enter-active, .expand-leave-active {
        transition: max-height .7s;
        overflow: hidden;
    }

    .expand-enter, .expand-leave-to {
        max-height: 0;
    }

</style>