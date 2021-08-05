<template>
  <div class="icons">
    <h1>Hello world</h1>



    <div v-for="iconType in Object.keys(icons)" :key="iconType">
      <Icon v-for="(icon, key) in icons[iconType]" :icon="icon" :style="iconType" :key="key" />
    </div>


  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import Icon from './Icon.vue'
import Icons from "../metadata/icons.json"
import store from "./store";
import { saveIcons } from "./composition";

export default defineComponent({
  name: 'App',
  components: {
    Icon
  },
  setup() {
    saveIcons(Icons)
    const icons = computed(() => store.icons);
    return {
      icons
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
