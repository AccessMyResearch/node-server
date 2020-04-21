<template>
  <div class="left_column">
    <button v-on:click="trendingFilterDisplay = !trendingFilterDisplay" class="collapsible sidenav">Trending</button>
    <div class="content" v-if="trendingFilterDisplay">
      <ul class="filteredOptions" style="clear:both">
        <li>Put some stuff here</li>
        <li>Put some stuff here</li>
      </ul>
    </div>
    
    <button type="button" v-on:click="yearFilterDisplay = !yearFilterDisplay" class="collapsible sidenav">Year</button>
    <div class="content" v-if="yearFilterDisplay">
      <ul class="filteredOptions" style="clear:both">
        <li><a href="#">Insert A Double Slider Here Or below</a></li>
      </ul>
    </div>
    
    <button type="button" v-on:click="areaFilterDisplay = !areaFilterDisplay" class="collapsible sidenav">Area</button>
    <div class="content" v-if="areaFilterDisplay">
      <ul class="filteredOptions" style="clear:both">
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
      </ul>
    </div>

    <button type="button" v-on:click="readingListFilterDisplay = !readingListFilterDisplay" class="collapsible sidenav">Reading List</button>
    <div class="content" v-if="readingListFilterDisplay">
      <ul class="filteredOptions" style="clear:both">
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
        <li><a href="#">Put some stuff here</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        trendingFilterDisplay: false,
        yearFilterDisplay: false,
        areaFilterDisplay: false,
        readingListFilterDisplay: false
        };
    }
  };
</script>


<style scoped>
  @import '../assets/css/mainpage.css';


.sidenav{
  background-color: var(--card-background);
}

.collapsible {
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: 500;
}

.active, .collapsible:hover {
  background-color: rgb(175, 175, 175);
}

.filteredOptions{
  font-size: 15px;
  padding-left: 35px;
}

.filteredOptions li{
  display: block;
}

</style>