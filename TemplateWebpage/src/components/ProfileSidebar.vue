<template>
  <div class="left_column">
      <div class="card" stlye="width: 100%;">
        <img class="card-img-top" src="../assets/images/blackprofile.png" alt="Card Image Cap">
      </div>
      <div class="button_group">
        <button type="button" class="btn btn-secondary">Statistics</button>
        <button type="button" class="btn btn-secondary">Overview</button>
        <button type="button" class="btn btn-secondary">Publications</button>
        <button type="button" class="btn btn-secondary">Grants</button>
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