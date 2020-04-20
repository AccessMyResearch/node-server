<template>
    <div class="body">
        <app-sidebar></app-sidebar>
        <app-main-feed></app-main-feed>
        <div class="right_column"></div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import MainFeed from './MainArticleFeed.vue';

    export default {
        components: {
            appSidebar: Sidebar,
            appMainFeed: MainFeed
        }
    }
</script>

<style scoped>
    @import "../assets/css/mainpage.css";
</style>

