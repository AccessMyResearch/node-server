<template>
<div>
  <head>
    <meta charset="utf-8">
    <title>Main Page</title>
    
    <link rel="stylesheet" href="MainPageCSSMockUp.css">
  </head>
  <body>
    <header>
        <div class="logo">
            <h2>My Logo</h2>
        </div>
        <div class="search-box">
            <input class = "search-text" type="text" name="" placeholder="Search for Publications, Authors, Questions">
        </div>
        <nav>
            <ul class="nav_links">
                <li><a href="#">Reading List</a> </li>
                <li><a href="#">Friends</a> </li>
                <li><a href="#">Messages</a> </li>
                <li><a href="#">Notifications</a> </li>
                <li><a href="#">Profile</a> </li>
            </ul>
        </nav>
    </header>

    <div class="DropDownMenu">
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

    <div class="DisplayBasicInformation">
        <h1>Title of Article</h1>
        <p>Author One: Name goes Here, Author Two: Name  goes Here • DOI: 10.1080/20445911.2020.1736086 • Journal or something (2020)</p>
        <hr>
        <h1>Title of Article</h1>
        <p>Author One: Name goes Here, Author Two: Name  goes Here • DOI: 10.1080/20445911.2020.1736086 • Journal or something (2020)</p>
        <hr>
        <h1>Title of Article</h1>
        <p>Author One: Name goes Here, Author Two: Name  goes Here • DOI: 10.1080/20445911.2020.1736086 • Journal or something (2020)</p>
        <hr>
        <h1>Title of Article</h1>
        <p>Author One: Name goes Here, Author Two: Name  goes Here • DOI: 10.1080/20445911.2020.1736086 • Journal or something (2020)</p>
        <hr>
        <h1>Title of Article</h1>
        <p>ABSTRACT: The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here</p>
        <p>The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here The</p>
        <p>Abstract  will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract </p>
        <p>will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here The Abstract will go here</p>
        <br>
        <p>Author One: Name goes Here, Author Two: Name  goes Here • DOI: 10.1080/20445911.2020.1736086 • Journal or something (2020)</p>
        <hr>
    </div>

    <div>
      <p>Response from server dump: 
        <button class="btn btn-primary" @click="fetchData"> Get Data From Server</button>
        {{responseData}}
      </p>
    </div>
  </body>
</div>
</template>

<script>
  function dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function dropDownFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  function dropDownFunction3() {
    document.getElementById("myDropdown3").classList.toggle("show");
  }
  function dropDownFunction4() {
    document.getElementById("myDropdown4").classList.toggle("show");
  }
  function dropDownFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }

  export default {
    data() {
      return {
        responseData: ''
      }
    },
    methods: {
      fetchData() {
        this.$http.get().then(response => { //insert next part of URL here if needed in the get()
          responseData = response.body;
          console.log(response.body);
        })
      }
    }
  }
  </script>

<style>
  @import './assets/mainpage.css';
</style>
