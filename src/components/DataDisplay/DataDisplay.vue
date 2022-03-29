<template>
  <p class="font-semibold">{{ label }}</p>
  <p data-testid="datadisplay-innerslot"><slot></slot></p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: String,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
