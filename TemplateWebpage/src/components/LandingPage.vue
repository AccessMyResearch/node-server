<template>
    <div class="body">
        <div class="padding_left"></div>
        <app-sidebar></app-sidebar>
        <app-main-feed></app-main-feed>
        <app-news-feed></app-news-feed>
        <div class="padding_left"></div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import MainFeed from './MainArticleFeed.vue';
    import NewsFeed from './NewsFeed.vue';

    export default {
        components: {
            appSidebar: Sidebar,
            appMainFeed: MainFeed,
            appNewsFeed: NewsFeed
        }
    }
</script>

<style scoped>
    @import "../assets/css/mainpage.css";

    .padding_left {
        height: 100%;
        flex: 1 1 auto;
    }
</style>

