<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark header-blue" style="color: white">
      <div class="right_column">
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
          <button class="btn btn-dark btn-sm" type="submit"><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="right_column">
        <ul class="navbar-nav ml-auto">
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
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="fas fa-user-circle fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

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
</style>