<template>
  <span class="icon">
    <img :src="svg" alt="name" />
  </span>
  <br>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  name: "icon",
  props: ["icon", "style"],
  setup(props) {
    const name = computed(() => props.icon.key)
    const svg = computed(() => {
      return `../svgs/${props.icon.styles[0]}/${name.value}.svg`;
    })
    return {
      name,
      svg
    }
  }
})
</script>
