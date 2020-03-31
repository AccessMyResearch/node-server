<template>
    <div class="row">
        <div class="col-sm-12">
          <h3 class="title">{{article.title}}</h3>
          <p class="text-muted">Published in some year</p>
          <p><span style="font-weight:bold">Abstract: </span>{{article.abstract}}</p>
          <p class="text-muted">Author(s): <a href="#">{{article.author}}</a></p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['article']
    }
</script>

<style scoped>

</style>
