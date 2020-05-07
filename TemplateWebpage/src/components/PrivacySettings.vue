<template>
  <div class="general">
    <div class="settings_menu card">
      <div class="card-header">
        Privacy
      </div>
      <div class="main_card_body">
        <div class="card-body main text-center">
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.
          </p>
          <hr>
          <p class="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

.general{
  margin: 0 auto;
  padding: 10px
}

.settings_menu{
  width: 1000px;
  height: 1000px;
  background-color: var(--card-background);
  border-radius: 15px;
  display: inline-block;
}

.main_card_body{
  display: flex;
  height: 100%;
}

.buttons_group{
  width: 25%;
}

.icons{
  float: left;
}

.btn{
  text-align: right;
  color: var(--card-text);
  background: var(--button-color);
}

.btn:hover{
  background: var(--button-hover);
}

.vertical-row{
  Float:left;
  height: 100%;
  width:1px;
  background-color: black;
}

.main{
  width: 75%;
}

</style>