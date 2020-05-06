<template>
  <div class="left_column">
    <div class="sidebar_content" v-if="sidebarDisplay">
      <button v-on:click="trendingFilterDisplay = !trendingFilterDisplay" class="collapsible sidenav">Trending</button>
      
      <button type="button" v-on:click="yearFilterDisplay = !yearFilterDisplay" class="collapsible sidenav">Year</button>
      <div class="content" v-if="yearFilterDisplay">
        <div class="filteredOptions">
          <div class="input-group">
            <input type="text" class="form-control" v-model="min" placeholder="Min"/>
            <input type="text" class="form-control" v-model="max" placeholder="Max"/>
          </div>
        </div>
      </div>
      
      <button type="button" v-on:click="areaFilterDisplay = !areaFilterDisplay" class="collapsible sidenav">Area</button>
      <div class="content" v-if="areaFilterDisplay">
        <ul class="filteredOptions" style="clear:both">
          <li><a href="#">Put some stuff here</a></li>
        </ul>
      </div>

      <button type="button" v-on:click="typeFilterDisplay = !typeFilterDisplay" class="collapsible sidenav">Type</button>
      <div class="content" v-if="typeFilterDisplay">
        <ul class="filteredOptions" style="clear:both">
          <li><a href="#">Put some stuff here</a></li>
        </ul>
      </div>

      <button type="button" v-on:click="readingListFilterDisplay = !readingListFilterDisplay" class="collapsible sidenav">Reading List</button>
      <div class="content" v-if="readingListFilterDisplay">
        <ul class="filteredOptions" style="clear:both">
          <li><a href="#">Put some stuff here</a></li>
        </ul>
      </div>

      <button type="button" @click="makeFilterRequest" class="collapsible sidenav">Apply Filter(s)</button>

      <div class="toggle_off float-right" v-if="sidebarDisplay" >
        <i @click="sidebarDisplay = !sidebarDisplay" class="fas fa-chevron-left"></i>
      </div>

    </div>
    <div class="toggle_on" v-else>
      <i @click="sidebarDisplay = !sidebarDisplay" class="fas fa-chevron-right"></i>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data() {
      return {
        sidebarDisplay: true,
        trendingFilterDisplay: false,
        yearFilterDisplay: false,
        areaFilterDisplay: false,
        typeFilterDisplay: false,
        readingListFilterDisplay: false,
        min: 1500,
        max: 2020
        };
    },
    methods: {
      makeFilterRequest() {
        var filterObj = {
          author: null,
          startYear: this.min,
          endYear: this.max
        }
        this.$store.commit('SET_FILTERS', filterObj);
        this.$store.dispatch('applyFilters');
      }
    }
  };
</script>


<style scoped>
@import '../assets/css/mainpage.css';

.fa-chevron-right {
  margin: auto;
}

.fa-chevron-left {
  margin: auto;
}

.sidebar_content {
  position: relative;
  margin-right: 5px;
}

.toggle_off {
  position: absolute;
  right: -15px;
  top: 10px;
  width: 15px;
  background-color: var(--card-background);
  text-align: center;
  display: flex;
  height: 30px;
}

.toggle_on {
  width: 15px;
  height: 30px;
  background-color: var(--card-background);
  display: flex;
}

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
  background-color: var(--card-background);
  margin-bottom: 0;
}

.filteredOptions li{
  display: block;
}

</style>