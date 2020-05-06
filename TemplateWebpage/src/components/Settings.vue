<template>
  <div>
    <div class="body">
      <app-settings-sidebar></app-settings-sidebar>
      <div class="middle_column">
        <component v-bind:is="component"></component>
        <button v-on:click="component='appGeneralSettings'">Click Me</button>
        <button v-on:click="component='appPrivacySettings'">Click  2</button>
      </div>
    </div>
  </div>
</template>

<script>
  import SettingsSidebar from './SettingsSidebar.vue';
  import GeneralSettings from './GeneralSettings.vue';
  import PrivacySettings from './PrivacySettings.vue';

export default {
  components: {
    appSettingsSidebar: SettingsSidebar,
    appGeneralSettings: GeneralSettings,
    appPrivacySettings: PrivacySettings
  },
  data() {
    return {
      component: 'appGeneralSettings'
    }
  },
}
</script>

<style scoped>
  @import '../assets/css/mainpage.css';
</style>