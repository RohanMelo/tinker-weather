<template>
  <div class="flex items-center justify-center">
    <div class="relative focus-within:text-gray-400 text-xl">
      <span
        class="absolute inset-y-0 left-0 flex items-center pl-2"
        v-if="hasIcon"
      >
        <slot name="icon"></slot>
      </span>

      <input
        :value="modelValue"
        @input="updateValue"
        :id="id"
        :type="inputType"
        :class="inputStyle"
        :placeholder="placeholder"
        @keyup.enter="handleKeyPress"
      />
      <label :for="id" v-if="labelText">{{ labelText }}</label>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BaseInput",
  props: {
    hasIcon: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      required: true,
    },
    labelText: String,
    modelValue: String,
    inputStyle: String,
    placeholder: String,
    inputType: {
      type: String,
      default: "text",
    },
    onKeyUp: Function,
  },
  setup(props, { emit }) {
    const updateValue = (e: Event) => {
      emit("update:modelValue", (e.target as HTMLInputElement).value);
    };
    const handleKeyPress = (e: Event) => {
      emit("onEnterPress", (e.target as HTMLInputElement).value);
    };
    return {
      updateValue,
      handleKeyPress,
    };
  },
});
</script>

<style scoped></style>
