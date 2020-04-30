<template>
    <div id="header">
        <div class="left_column">
            <router-link id="home-link" to="/"><img class="left_column" src="../assets/images/AMRLogo.png"></router-link>
            <nav class="nav-bar">
                <a @mouseover="addTab=true" @mouseleave="addTab=false" class="nav-item">
                    <i class="fas fa-plus fa-lg"></i>
                    <transition name="fade">
                        <nav class="profile-tab_left" v-if="addTab" @click="addTab = false" >
                            <router-link id="upload-link" to="/upload" v-if="authenticated">Add New</router-link>
                            <a href="#">Research</a>
                            <a href="#">Project</a>
                            <a href="#">Course</a>
                            <a href="#">Blog</a>
                            <a href="#">Jobs</a>
                        </nav>
                    </transition>
                </a>
                <a @mouseover="donateTab=true" @mouseleave="donateTab=false" class="nav-item" href="#">
                    <i class="fas fa-dollar-sign fa-lg"></i>
                    <transition name="fade">
                        <nav class=" profile-tab_left" v-if="donateTab" @click="donateTab = false">
                            <a href="#">Donate</a>
                            <a href="#">$1</a>
                            <a href="#">$5</a>
                            <a href="#">$10</a>
                            <a href="#">$50</a>
                            <a href="#">$100</a>
                        </nav>
                    </transition>
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
                        v-model="searchInput"
                />
                <button class="btn btn-dark btn-sm" type="submit" @click.prevent="sendSearchRequest">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
        <div class="right_column">
            <nav class="nav-bar">
                <a @mouseover="readingListTab=true" @mouseleave="readingListTab=false" class="nav-item" href="#">
                    <i class="fas fa-book-open fa-lg"></i>
                    <transition name="fade">
                        <div class="icon_containier" v-if="readingListTab" @click="readingListTab = false">
                            <div class="icon_header">
                                Reading List
                            </div>
                            <div class="icon_container_content">
                                Reading list folder one
                            </div>
                        </div>
                    </transition>
                </a>
                <a @mouseover="friendsTab=true" @mouseleave="friendsTab=false" class="nav-item" href="#">
                    <i class="fas fa-user-friends fa-lg"></i>
                    <transition name="fade">
                        <div class="icon_containier" v-if="friendsTab" @click="friendsTab = false">
                            <div class="icon_header">
                                Friends
                            </div>
                            <div class="icon_container_content">
                                Mehmet wants to be your friend
                            </div>
                        </div>
                    </transition>
                </a>
                <a @mouseover="messageTab=true" @mouseleave="messageTab=false" class="nav-item" href="#">
                    <i class="fas fa-envelope fa-lg"></i>
                    <transition name="fade">
                        <div class="icon_containier" v-if="messageTab" @click="messageTab = false">
                            <div class="icon_header">
                                Messages
                            </div>
                            <div class="icon_container_content">
                                Mehmet Messaged you
                            </div>
                        </div>
                    </transition>
                </a>
                <a @mouseover="notificationTab=true" @mouseleave="notificationTab=false" class="nav-item" href="#">
                    <i class="fas fa-bell fa-lg"></i>
                    <transition name="fade">
                        <div class="icon_containier" v-if="notificationTab" @click="notificationTab = false">
                            <div class="icon_header">
                                Notifications
                            </div>
                            <div class="icon_container_content">
                                Mehmet Liked your publication
                            </div>
                        </div>
                    </transition>
                </a>
                <a @mouseover="profileTabState=true" @mouseleave="profileTabState=false" class="nav-item" href="#">
                    <i class="fas fa-user-circle fa-lg"></i>
                    <transition name="fade">
                        <nav class="profile-tab_right" v-if="profileTabState" @click="profileTabState=false">
                            <router-link id="profile-link" to="/profile">Profile</router-link>
                            <a href="#">Help</a>
                            <a href="#">Settings</a>
                            <a href="#">Privacy</a>
                            <a href="#">About</a>
                            <hr/>
                            <a @click="login()" v-if="!authenticated">Login</a>
                            <a @click="logout()" v-else>Log out</a>
                        </nav>
                    </transition>
                </a>
            </nav>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

    export default {
        data() {
            return {
                profileTabState: false,
                readingListTab: false,
                friendsTab: false,
                messageTab: false,
                notificationTab: false,
                donateTab: false,
                addTab: false,
                searchInput: ''
            }
        },
        methods: {
            sendSearchRequest() {
                var searchArr = this.searchInput.trim().split(' ');
                this.$store.commit('SET_KEYWORDS', searchArr);
                this.$store.dispatch('searchKeywords');
            },
            ...mapActions(['login', 'logout'])
        },
        computed: mapGetters(['authenticated'])
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

    .profile-tab_right {
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

    .profile-tab_right a {
        text-decoration: none;
        text-align: right;
        min-width: 100px;
        padding-right: 5px;
    }

    .profile-tab_right a:hover {
        background-color: #aaa;
    }

    .profile-tab_right hr {
        border-top: 1px solid rgba(0, 0, 0, .6);
        margin: 0;
    }

    .profile-tab_left {
        position: absolute;
        left: 0;
        top: 130%;
        background-color: var(--modal-background);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, .1);
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        overflow: hidden;
    }

    .profile-tab_left a {
        text-decoration: none;
        text-align: left;
        min-width: 100px;
        padding-right: 5px;
    }

    .profile-tab_left a:hover {
        background-color: #aaa;
    }

    .profile-tab__left hr {
        border-top: 1px solid rgba(0, 0, 0, .6);
        margin: 0;
    }

    .icon_containier{
        position: absolute;
        right: 0;
        top: 130%;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        overflow: hidden;
        width: 300px;
        height: 500px;
        background: var(--card-background);
    }

    .icon_header{
        background: rgb(97, 91, 81);
        padding: 5px;
        color: black;
        font-size: 18px;
    }
    
    .icon_container_content{
        color: black;
        padding: 16px;
        font-size: 16px;
    }

</style>