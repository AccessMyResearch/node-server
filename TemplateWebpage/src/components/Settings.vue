<template>
  <div>
    <div class="body">
      <div class="padding_left"></div>
      <app-settings-sidebar></app-settings-sidebar>
      <component v-bind:is="component"></component>
      <div class="padding_left"></div>
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

  .padding_left{
      height: 100%;
      flex: 1 1 auto;
  }

</style>