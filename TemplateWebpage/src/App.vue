<template>
<div id="app">
  <head>
    <meta charset="utf-8">
    <title>Main Page</title>
    

  </head>
  <body>
    <app-header></app-header>
    <app-options></app-options>

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
  import Header from './components/Header.vue';
  import Options from './components/Options.vue';

  export default {
    components: {
      appHeader: Header,
      appOptions: Options
    },
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