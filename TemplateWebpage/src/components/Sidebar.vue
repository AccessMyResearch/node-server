<template>
  <div class="sidenav left_column">
    <button type="button" v-on:click="openFunction" class="collapsible">Trending</button>
    <div class="content">
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
    
    <button type="button" v-on:click="openFunction" class="collapsible">Year</button>
    <div class="content">
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
    
    <button type="button" v-on:click="openFunction" class="collapsible">Area</button>
    <div class="content">
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

    <button type="button" v-on:click="openFunction" class="collapsible">Database</button>
    <div class="content">
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

    <button type="button" v-on:click="openFunction" class="collapsible">Reading List</button>
    <div class="content">
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
    methods: {
      openFunction : function(arg){
        var coll = document.getElementsByClassName("collapsible");
        var i;

      for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.display === "block") {
            content.style.display = "none";
          } else {
            content.style.display = "block";
          }
        });
      }
    }
  }
  }
</script>


<style scoped>

.sidenav{
  padding-right: 20px;
}

.collapsible {
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: rgb(175, 175, 175);
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
}

.filteredOptions{
  font-size: 15px;
}

.filteredOptions li{
  display: block;
}

</style>