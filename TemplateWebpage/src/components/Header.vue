<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark header-blue" style="color: white">
            <div class="right_column">
                <a class="navbar-brand" href="#">AMR LOGO</a>
                <a class="nav-item" style="color: white" href="#"><i class="fas fa-plus"></i></a>
            </div>
            <div class="middle_column">
                <form class="form-inline d-flex dropdown mx-auto">
                    <input class="form-control form-control-sm" type="text" placeholder="Search" id="menu1" data-toggle="dropdown">
                    <button class="btn btn-secondary btn-sm" type="submit">Search</button>
                </form>
            </div>
            <div class="right_column">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-book-open"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-user-friends"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-envelope"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-bell"></i></a></li>
                    <li class="nav-item"><a class="nav-link" href="#"><i class="fas fa-user-circle"></i></a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
  .header-blue {
    background-color: #487BBF
  }
</style>