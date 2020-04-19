<template>
  <div class="card article-card" @click="showArticle = !showArticle">
    <div class="row article-card-head">
      <div class="col-sm-11 article-card-left">
        <div class="panel-heading">
          <h5 class="title">
            <a :href="article.url">{{article.title}}</a>
          </h5>
          <p class="text-muted">
            <span v-for="(author, index) in article.authors">
              {{author}}
              <span id="author comma" v-if="index != article.authors.length - 1">,</span>
            </span>
            | {{article.doi}} | {{article.publicationDate}}
          </p>
        </div>
      </div>
      <div class="col-sm-1 my-auto article-card-right">
        <i v-if="!showArticle" class="fas fa-chevron-down"></i>
        <i v-else class="fas fa-chevron-up"></i>
      </div>
    </div>
    <div class="panel-body article-card-body" v-if="showArticle">
      <div class="article-card-left">
        <p>Abstract: {{article.summary}}</p>
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
.expanded-card-icons {
  margin: auto;
}


.article-card {
  padding: 2px 5px;
  margin-top: 5px;
  background-color: #dddddd;
  color: #333333;
}

.article-card-head {
  text-align: center;
}

.article-card-left {
  width: 90%;
  text-align: justify;
}

.article-card-right {
  width: 10%;
  display: flex;
  flex-flow: column;
}

p, h5 {
  margin-bottom: 0;
}

</style>