<template>
    <div id="header">
        <div class="left_column">
            <router-link id="home-link" to="/"><img class="left_column" src="../assets/images/AMRLogo.png"></router-link>
            <nav class="nav-bar">
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
                        id="search-input"
                        class="form-control form-control-sm"
                        type="text"
                        placeholder="Search by keyword or author"
                        data-toggle="dropdown"
                />
                <button class="btn btn-dark btn-sm" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
        <div class="right_column">
            <nav class="nav-bar">
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

    #header {
        display: flex;
        position: fixed;
        height: var(--header-height);
        width: 100%;
        padding: 0;
        z-index: 1;
        background-color: var(--header-color);
    }

    #home-link {
        margin: 0 10px;
    }

    .search-bar {
        height: 100%;
        width: fit-content;
        margin: auto;
    }

    #search-input {
        width: 500px;
    }

    .nav-bar {
        display: flex;
        flex: 1 0 auto;
        height: 100%;
        float: right;
        flex-direction: row;
    }

    .nav-item {
        position: relative;
        display: flex;
        margin: auto 5px;
        align-content: center;
        color: var(--button-color);
        text-decoration: none;
    }

    .nav-item:hover {
        color: var(--button-hover);
    }

    .profile-tab {
        position: absolute;
        right: 0;
        top: 130%;
        background-color: var(--modal-background);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .1);
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        overflow: hidden;
    }

    .profile-tab a {
        text-decoration: none;
        text-align: right;
        min-width: 100px;
        padding-right: 5px;
    }

    .profile-tab a:hover {
        background-color: #aaa;
    }

    .profile-tab hr {
        border-top: 1px solid rgba(0, 0, 0, .6);
        margin: 0;
    }

</style>