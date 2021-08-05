<template>
  <div class="icons">
    <h1>Hello world</h1>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Icons from "../metadata/icons.json"
import store from "./store";
import { saveIcons } from "./composition";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
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
