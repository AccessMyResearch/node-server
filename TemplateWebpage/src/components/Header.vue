<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark header-blue" style="color: white">
      <div class="left_column">
        <a class="navbar-brand" href="#">AMR LOGO</a>
        <a class="nav-item" style="color: white" href="#">
          <i class="fas fa-plus fa-lg"></i>
        </a>
        <a class="nav-item col px-md-3">
          <i class="fas fa-dollar-sign fa-lg"></i>
        </a>
      </div>
      <div class="middle_column">
        <form class="form-inline d-flex dropdown mx-auto">
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
        <ul class="navbar-nav menu-tab float-right">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-book-open fa-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-user-friends fa-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-bell fa-lg"></i>
            </a>
          </li>
          <li @mouseover="profiletab = true" @mouseleave="profiletab = false" class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-user-circle fa-lg"></i>
            </a>
            <transition name="fade">
              <ul class="card" v-if="profiletab" @click="profiletab = false">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <hr/>
                <li>
                  <a href="#">Sign Out</a>
                </li>
              </ul>
            </transition>
            </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profiletab: false
    };
  }
};
</script>

<style scoped>
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

.menu-tab {  
  font: 14px/1.5;
}

.menu-tab a {
  color: rgb(12, 11, 11);
  text-decoration: none;
}

.menu-tab li {
  display:block;
  float: left;
  position: relative;
}

.menu-tab li ul {
  position: absolute;
  right: 0px;
  top: 48px;
  margin: 0;
  padding: 0;
}

.menu-tab li ul li {
  background: rgb(255, 255, 255);
  min-width: 100px;
  text-align: right;
  transition: background .2s;
}

.menu-tab li ul hr{
    right: 0px;
    top: 0px;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
}

.menu-tab li ul li:hover {
  background: rgb(117, 117, 117);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>