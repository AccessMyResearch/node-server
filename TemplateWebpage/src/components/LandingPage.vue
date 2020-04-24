<template>
    <div class="body">
        <app-sidebar></app-sidebar>
        <app-main-feed></app-main-feed>
        <div class="right_column">
            <app-news-feed></app-news-feed>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import MainFeed from './MainArticleFeed.vue';
    import NewsFeed from './Newsfeed.vue';

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
</style>

