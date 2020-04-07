<template>
  <div class="card" @click="showArticle = !showArticle">
      <tr class="row">
        <th class="col-sm-11">
          <div class="panel-heading">
            <h5 class="title"><a :href="article.url">{{article.title}}</a></h5>
            <p class="text-muted"> 
                <span v-for="(author, index) in article.authors">
                {{author}}<span id="author comma" v-if="index != article.authors.length - 1">,</span>
                </span>
                | {{article.doi}} | {{article.publicationDate}}</p>
          </div>
        </th>
        <th class="col-sm-1 my-auto">
          <i @click="showArticle = !showArticle" class="fas fa-chevron-down float-center"></i>
        </th>
      </tr>
      <div class="panel-body" v-if="showArticle">
        <p>{{article.summary}}</p>
      </div>
    <!-- <p>
                <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    {{article.title}}
                </button>
            </p>
            <div class="collapse" id="collapseExample">
                <div class="card card-body">
                    {{article.summary}}
                </div>
    </div>-->
  </div>
</template>

<script>
export default {
  props: ["article"],
  data() {
      return {
          showArticle: false,
          
      }
  }
};
</script>

<style scoped>
</style>
