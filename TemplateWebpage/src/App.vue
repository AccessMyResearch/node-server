<template>
    <div id="app">
        <head>
            <meta charset="utf-8">
            <title>Main Page</title>
        </head>
    <body> 
    <app-header></app-header>
        <div class="body">
            <app-sidebar></app-sidebar>
            <div class="DisplayBasicInformation middle_column">
                <app-main-feed></app-main-feed>
                <hr>
            </div>
        </div>
    </body>
    </div>
</template>

<style scoped>
     @import "assets/css/mainpage.css";
</style>

<script>
    import Header from './components/Header.vue';
    import Sidebar from './components/Sidebar.vue';
    import MainFeed from './components/MainArticleFeed.vue';

    export default {
        components: {
            appHeader: Header,
            appSidebar: Sidebar,
            appMainFeed: MainFeed
        },
        data() {
            return {
                responseData: ''
            }
        }
    }
</script>