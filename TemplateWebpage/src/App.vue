<template>
    <div id="app">
        <v-app>
            <app-header></app-header>
            <router-view></router-view>
        </v-app>
    </div>
</template>

<style>
     @import "assets/css/mainpage.css";
</style>

<script>
    import Header from './components/Header.vue';

    export default {
        components: {
            appHeader: Header
        }
    }
</script>