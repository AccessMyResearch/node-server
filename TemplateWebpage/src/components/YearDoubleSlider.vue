<template>
<div>
            <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="align-center"
            >
              <template v-slot:prepend>
                <v-text-field
                  :value="range[0]"
                  class="slider_label"
                  hide-details
                  single-line
                  type="number"
                  style="width: 50px; font-size: 10pt;"
                  @change="$set(range, 0, $event)"
                ></v-text-field>
              </template>
              <template v-slot:append>
                <v-text-field
                  :value="range[1]"
                  class="slider_label"
                  hide-details
                  single-line
                  type="number"
                  style="width: 50px; font-size: 8pt;"
                  @change="$set(range, 1, $event)"
                ></v-text-field>
              </template>
            </v-range-slider>
  </div>
</template>

<script>
export default {
    data () {
        return {
        min: 1500,
        max: 2020,
        slider: 40,
        range: [-20, 70],
        }
  }
}
</script>

<style scoped>
</style>