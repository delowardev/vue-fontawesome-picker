<template>
  <div class="icons">
    <div class="icon-type" v-for="iconType in Object.keys(icons)" :key="iconType">
      <Icon v-for="(icon, key) in icons[iconType]" :icon="icon" :style="iconType" :key="key" />
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
import Icon from './Icon.vue'
import Icons from "../metadata/icons.json"
// import Categories from "../metadata/categories.json"
import store from "./store";
import { saveIcons } from "./composition";

export default defineComponent({
  name: 'App',
  components: {
    Icon
  },
  setup() {
    // console.log(Categories)
    // console.log(Icons)
    saveIcons(Icons)

    const icons = computed(() => store.icons);
    return {
      icons
    }
  }
})
</script>

<style>
.icons .icon-type {
  display: flex;
  flex-wrap: wrap;
}


.icons .icon-type .icon {
  flex-basis: 20px;
  max-width: 20px;
  padding: 10px;
}

</style>
