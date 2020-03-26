<template>
    <div class="DropDownMenu left_column">
        <div class="dropdown">
            <button onclick="dropDownFunction()" class="dropdownbutton">Trending</button>
            <div id="myDropdown" class="filter">
              <a href="#about">About</a>
              <a href="#base">Base</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contact</a>
              <a href="#custom">Custom</a>
              <a href="#support">Support</a>
              <a href="#tools">Tools</a>
            </div>
          </div>

          <div class="dropdown">
            <button onclick="dropDownFunction2()" class="dropdownbutton">Year</button>
            <div id="myDropdown2" class="filter">
              <a href="2020">2020</a>
              <a href="2019">2019</a>
              <a href="2018">2018</a>
              <a href="2017">2017</a>
              <a href="2016">2016</a>
            </div>
          </div>

          <div class="dropdown">
            <button onclick="dropDownFunction3()" class="dropdownbutton">Area</button>
            <div id="myDropdown3" class="filter">
              <a href="Computer Science">Computer Science</a>
              <a href="Biology">Biology</a>
              <a href="Criminal Justice">Crimal Justice</a>
              <a href="Physics">Physics</a>
            </div>
          </div>

          <div class="dropdown">
            <button onclick="dropDownFunction4()" class="dropdownbutton">Database</button>
            <div id="myDropdown4" class="filter">
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
              <a href="#">Put some stuff here</a>
            </div>
          </div>

          <div class="dropdown">
            <button onclick="dropDownFunction5()" class="dropdownbutton">Reading List</button>
            <div id="myDropdown5" class="filter">
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
                <a href="#">Put some stuff here</a>
            </div>
          </div>
    </div>
</template>