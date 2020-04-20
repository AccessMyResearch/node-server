<template>
  <div id="header" class="navbar navbar-expand-md navbar-dark header-blue">
      <div class="left_column">
        <router-link id="home-link" to="/" class="navbar-brand">AMR LOGO</router-link>
          <nav class="left-icons">
              <a @mouseover="addTab=true" @mouseleave="addTab=false" class="nav-item" href="#">
                <i class="fas fa-plus fa-lg"></i>
                <transition name="fade">
                  <nav class="profile-tab" v-if="addTab" @click="addTab = false">
                      <router-link id="upload-link" to="/upload">Add New</router-link>
                      <a href="#">Research</a>
                      <a href="#">Project</a>
                      <a href="#">Course</a>
                      <a href="#">Blog</a>
                      <a href="#">Jobs</a>
                  </nav>
                </transition>
              </a>
              <a class="nav-item">
                <i class="fas fa-dollar-sign fa-lg"></i>
              </a>
          </nav>
      </div>
      <div class="middle_column">
        <form class="form-inline dropdown search-bar">
          <input
            class="form-control form-control-sm col-sm-4"
            type="text"
            placeholder="Search by keyword or author"
            id="menu1"
            data-toggle="dropdown"
          />
          <button class="btn btn-dark btn-sm" type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div class="right_column">
        <nav class="left-icons">
            <a class="nav-item" href="#">
              <i class="fas fa-book-open fa-lg"></i>
            </a>
            <a class="nav-item" href="#">
              <i class="fas fa-user-friends fa-lg"></i>
            </a>
            <a class="nav-item" href="#">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
            <a class="nav-item" href="#">
              <i class="fas fa-bell fa-lg"></i>
            </a>
            <a @mouseover="profileTabState=true" @mouseleave="profileTabState=false" class="nav-item" href="#">
              <i class="fas fa-user-circle fa-lg"></i>
              <transition name="fade">
                <nav class="profile-tab" v-if="profileTabState" @click="profileTabState=false">
                  <router-link id="profile-link" to="/profile">Profile</router-link>
                  <a href="#">Help</a>
                  <a href="#">Settings</a>
                  <a href="#">Privacy</a>
                  <a href="#">About</a>
                  <hr/>
                  <a href="#">Sign Out</a>
                </nav>
              </transition>
            </a>
        </nav>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profileTabState: false,
      addTab: false
    };
  }
};
</script>

<style scoped>
  @import "../assets/css/mainpage.css";
#home-link {
  margin: 0 10px;
}
#header {
  height: 40px;
  padding: 0;
  z-index: 1;
}
.search-bar {
  margin: auto;
}
.left-icons {
  margin: auto 0;
  float: right;
  display: flex;
  height: 100%;
  flex-direction: row;
}
.nav-item {
  position: relative;
  margin: auto 5px;
  width: 24px;
  align-content: center;
  display: flex;
  color: #dddddd;
  text-decoration: none;
}
.nav-item:hover {
  color: white;
}
.fas {
  margin: auto
}
.profile-tab {
  position: absolute;
  right: 0;
  top: 130%;
  background-color: white;
  box-shadow: 2px 2px 2px 1px rgba(0,0,0,.1);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
}
.profile-tab a {
  text-decoration: none;
  text-align: right;
  min-width: 100px;
  background-color: white;
  padding-right: 5px;
}
.profile-tab a:hover {
  background-color: #aaaaaa;
}
.profile-tab hr {
  border-top: 1px solid rgba(0,0,0,.6);
  margin: 0;
}
.header-blue {
  background-color: #487bbf;
}
.navbar-nav > li > a {
  padding-top: 1px !important;
  padding-bottom: 1px !important;
}
.navbar {
  min-height: 4px !important;
}
.menu-tab-right {  
  font: 14px/1.5;
}
.menu-tab li {
  display:block;
  float: left;
  position: relative;
}
.menu-tab-right li ul {
  position: absolute;
  right: 0px;
  top: 48px;
  margin: 0;
  padding: 0;
}
.menu-tab-right li ul li {
  background: rgb(255, 255, 255);
  transition: background .2s;
}
.menu-tab-right li ul hr{
    right: 0px;
    top: 0px;
    bottom: 0px;
    padding: 0px;
}
.menu-tab-right li ul li:hover {
  background: rgb(117, 117, 117);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
.left_icons{
  padding-right: 20px;
}
.menu-tab-left {  
  font: 14px/1.5;
}
.menu-tab-left a {
  color: rgb(12, 11, 11);
  text-decoration: none;
}
.menu-tab-left li {
  display:block;
  float: right;
  position: relative;
}
.menu-tab-left li ul {
  position: absolute;
  left: 0px;
  top: 48px;
  margin: 0;
  padding: 0;
}
.menu-tab-left li ul li {
  background: rgb(255, 255, 255);
  min-width: 100px;
  text-align: left;
  transition: background .2s;
}
.menu-tab-left li ul li:hover {
  background: rgb(117, 117, 117);
}
</style>