<template>
    <div class="sidenav left_column">
        <button class="dropdown-btn">Trending <i class="fa fa-caret-down"></i>
            <ul class="filteredOptions" style="clear:both">
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            <li><a href="#">Put some stuff here</a></li>
            </ul>
        </button>

            <button class="dropdown-btn">Year<i class="fa fa-caret-down"></i>
        
        </button>
        
        <button class="dropdown-btn">Area <i class="fa fa-caret-down"></i>
            <ul class="filteredOptions">
                <li><a href="">Computer Science</a></li>
                <li><a href="">Biology</a></li>
                <li><a href="">Criminal Justice</a></li>
                <li><a href="">Physics</a></li>
            </ul>
        </button>
        
        <button class="dropdown-btn">Database <i class="fa fa-caret-down"></i>
        
        </button>
        
        <button class="dropdown-btn">Reading List <i class="fa fa-caret-down"></i>
        
        </button>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
/* Fixed sidenav, full height */
.sidenav {
  width: 20%;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

/* Style the sidenav links and the dropdown button */
.sidenav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
  border: none;
  background: none;
  width:100%;
  text-align: left;
}

/* On mouse-over */
.sidenav a:hover, .dropdown-btn:hover {
  color: #f1f1f1;
}

/* Main content */
.main {
  margin-left: 200px; /* Same as the width of the sidenav */
  font-size: 20px; /* Increased text to enable scrolling */
  padding: 0px 10px;
}

.filteredOptions{
  font-size: 10px;
}

/* Add an active class to the active dropdown button */
.active {
  background-color: green;
  color: white;
}

/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */
.dropdown-container {
  display: none;
  background-color: #262626;
  padding-left: 8px;
}

/* Optional: Style the caret down icon */
.fa-caret-down {
  float: right;
  padding-right: 8px;
}
</style>