<template>
    <div>
        <div class="body">
            <div class="padding_left"></div>
            <app-profile-sidebar></app-profile-sidebar>
            <app-user-info></app-user-info>
            <app-news-feed></app-news-feed>
            <div class="padding_left"></div>
        </div>
    </div>
</template>

<script>
    import ProfileSidebar from './ProfileSidebar.vue';
    import UserInfo from './Userinfo.vue';
    import NewsFeed from './NewsFeed.vue';

    export default {
        components: {
            appProfileSidebar: ProfileSidebar,
            appUserInfo: UserInfo,
            appNewsFeed: NewsFeed
        }
    }
</script>

<style scoped>
    @import '../assets/css/mainpage.css';

    .padding_left{
        height: 100%;
        flex: 1 1 auto;
    }
</style>