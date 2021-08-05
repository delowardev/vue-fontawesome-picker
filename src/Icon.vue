<template>
  <span>
    {{ name }}
  </span>
  <br>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  name: "icon",
  props: ["icon", "style"],
  setup(props) {
    console.log(props.icon)
    const name = computed(() => props.icon.label)
    return {
      name,
    }
  }
})
</script>
