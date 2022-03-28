<template>
  <div class="z-40">
    <svg
      class="sun-icon"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 43.4 43.4"
      enable-background="new 0 0 43.4 43.4"
      xml:space="preserve"
    >
      <circle
        class="circle"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        cx="21.7"
        cy="21.5"
        r="12.6"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="21.7"
        y1="6.3"
        x2="21.7"
        y2="0"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="21.7"
        y1="43.4"
        x2="21.7"
        y2="37"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="6.3"
        y1="21.7"
        x2="0"
        y2="21.7"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="43.4"
        y1="21.7"
        x2="37"
        y2="21.7"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="10.8"
        y1="10.8"
        x2="6.4"
        y2="6.4"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="37"
        y1="37"
        x2="32.5"
        y2="32.5"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="10.8"
        y1="32.5"
        x2="6.4"
        y2="37"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="37"
        y1="6.4"
        x2="32.5"
        y2="10.8"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="15.6"
        y1="7.6"
        x2="13.2"
        y2="1.8"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="30.2"
        y1="41.6"
        x2="27.7"
        y2="35.8"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="7.6"
        y1="27.7"
        x2="1.8"
        y2="30.2"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="41.6"
        y1="13.2"
        x2="35.8"
        y2="15.6"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="7.4"
        y1="16"
        x2="1.6"
        y2="13.6"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="41.8"
        y1="29.7"
        x2="35.9"
        y2="27.4"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="16"
        y1="35.9"
        x2="13.6"
        y2="41.8"
      />
      <line
        class="ray"
        fill="none"
        stroke="#252223"
        stroke-width="2"
        stroke-miterlimit="10"
        x1="29.7"
        y1="1.6"
        x2="27.4"
        y2="7.4"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.sun-icon {
  width: 30%;
  margin: 0 auto;
  display: block;
  animation: rotate 10s 0s linear infinite;
  fill: #fd7c4f;
  transition: all 0.4s;
}
.sun-icon .ray,
.sun-icon .circle {
  stroke: #fd7c4f;
  transition: all 0.4s;
}
.sun-icon:hover {
  fill: dodgerblue;
  transition: all 0.4s;
}
.sun-icon:hover .ray,
.sun-icon:hover .circle {
  stroke: dodgerblue;
  transition: all 0.4s;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
