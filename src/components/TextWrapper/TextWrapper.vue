<template>
  <component
    :is="isHeading ? 'h1' : 'p'"
    class="text-textprimary dark:text-white"
    :class="isHeading ? 'rubik text-4xl font-bold' : ''"
    ><slot></slot
  ></component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextWrapper",
  props: {
    isHeading: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const test = "Test";

    return {
      test,
    };
  },
});
</script>

<style scoped></style>
