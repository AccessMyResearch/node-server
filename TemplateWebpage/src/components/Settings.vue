<template>
  <div>
    <div class="settings_menu card">
      <div class="card-header">
        Settings
      </div>
      <div class="main_card_body">
        <div class="card-body buttons_group">
          <div class="btn-group-vertical btn-lg btn-block">
            <button type="button" class="btn btn-secondary btn-lg"><i class="icons fas fa-cogs"></i>General</button>
            <button type="button" class="btn btn-secondary btn-lg"><i class="icons fas fa-user-secret"></i>Privacy</button>
            <button type="button" class="btn btn-secondary btn-lg"><i class="icons fas fa-language"></i>Language and Region</button>
            <button type="button" class="btn btn-secondary btn-lg"><i class="icons fas fa-bell"></i>Notifications</button>
            <button type="button" class="btn btn-secondary btn-lg"><i class="icons fas fa-credit-card"></i>Payments</button>
          </div>
        </div>
        <div class="vertical-row">
        </div>
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

.settings_menu{
  width: 80%;
  height: 80%;
  background-color: var(--card-background);
  border-radius: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);width: 80
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