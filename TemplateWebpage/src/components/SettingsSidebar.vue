<template>
  <div class="left_column">
      <div class="button_group">
        <button :style="{ backgroundColor: backgroundcolor }" type="button" v-on:click="displayGeneral" class="btn btn-secondary btn-lg">General</button>
        <button type="button" v-on:click="displayPrivacy" class="btn btn-secondary btn-lg">Privacy</button>
        <button type="button" class="btn btn-secondary btn-lg">Localization</button>
        <button type="button" class="btn btn-secondary btn-lg">Notifications</button>
        <button type="button" class="btn btn-secondary btn-lg">Payments</button>
      </div>
  </div>
</template>

<script>
  import Slider from './YearDoubleSlider.vue';

  export default {
    data() {
      return {
        displayGeneralValue: false,
        disaplyPrivacyvalue: false,
        backgroundcolor: "var(--button-color)"
      };
    },methods: {
      displayGeneral(){
        displayGeneralValue = true;
        disaplyPrivacyvalue = false;
        this.backgroundcolor = "var(--button-hover)";
      },
      displayPrivacy(){
        displayGeneralValue = false;
        disaplyPrivacyvalue = true;
      }
    },
  };
</script>



<style scoped>

.btn{
  text-align: left;
  width: 100%;
  color: var(--card-text);
  background: var(--button-color);
}

.btn:hover{
  background: var(--button-hover);
}

</style>