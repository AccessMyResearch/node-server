<template>
    <div>
        <div class="body">
            <app-profile-sidebar></app-profile-sidebar>
            <div class="middle_column">
                <app-user-info></app-user-info>
            </div>
        </div>
    </div>
</template>

<script>
    import ProfileSidebar from './ProfileSidebar.vue';
    import UserInfo from './Userinfo.vue';

    export default {
        components: {
            appProfileSidebar: ProfileSidebar,
            appUserInfo: UserInfo
        }
    }
</script>

<style scoped>
    @import '../assets/css/mainpage.css';
</style>