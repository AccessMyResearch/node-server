<template>
  <div class="left_column">
      <div class="card" stlye="width: 100%;">
        <img class="card-img-top" src="../assets/images/blackprofile.png" alt="Card Image Cap">
      </div>
      <div class="button_group">
        <button type="button" class="btn btn-secondary">Statistics<i class="icons fas fa-chart-bar"></i></button>
        <button type="button" class="btn btn-secondary">Overview<i class="icons fas fa-ellipsis-v"></i></button>
        <button type="button" class="btn btn-secondary">Publications<i class="icons fas fa-book-reader"></i></button>
        <button type="button" class="btn btn-secondary">Grants<i class="icons fas fa-search-dollar"></i></button>
      </div>
  </div>
</template>

<script>

</script>


<style scoped>

.card{
  background-color: var( --card-background);
}

.icons{
  float: right;
}

.btn{
  text-align: left;
  width: 100%;
  color: var(--card-text);
  background: var(--button-color);
}

.btn:hover{
  background: var(--button-hover);
}

</style>