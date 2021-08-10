<template>

  <div class="vue-fontawesome-picker">
    <div class="vue-fontawesome-input">
      <input type="text">
      <button>
        <span class="fas fa-flag"></span>
      </button>
    </div>
    <div class="vue-fontawesome-popup">
      <div class="vue-fontawesome-header">
        <button>
          <span class="far fa-flag"></span>
          All
        </button>
        <button>
          <span class="fas fa-smile"></span> Solid
        </button>
        <button>
          <span class="far fa-smile"></span> Regular
        </button>
        <button>
          <span class="fab fa-apple"></span> Brand
        </button>
      </div>
      <div class="vue-fontawesome-search">
        <input type="text" placeholder="Search icons">
      </div>
      <div class="vue-fontawesome-icons">
        
      </div>
    </div>
  </div>

  <div class="icons">
<!--    <div class="icon-type" v-for="iconType in Object.keys(icons)" :key="iconType">-->
<!--      <Icon v-for="(icon, key) in icons[iconType]" :icon="icon" :style="iconType" :key="key" />-->
<!--    </div>-->
<!--    -->

<!--    <div class="icon-type">-->
<!--      <Icon v-for="(icon, key) in icons['all']" :key="key" :icon="icon"></Icon>-->
<!--    </div>-->

    <span class="fab fa-facebook-f"></span>



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
    //@ts-ignore
    saveIcons(Icons)

    const icons = computed(() => store.icons);


    console.log(icons.value)

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
