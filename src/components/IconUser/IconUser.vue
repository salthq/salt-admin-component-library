<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g
      ><path
        d="M20.415,15.665a8,8,0,1,0-8.83,0A15.025,15.025,0,0,0,1,30a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1A15.025,15.025,0,0,0,20.415,15.665ZM10,9a6,6,0,1,1,6,6A6.006,6.006,0,0,1,10,9ZM3.038,29a13,13,0,0,1,25.924,0Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconUser",
  components: {
    IconWrapper,
  },
  props: {
    fill: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      required: false,
      default: 28,
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0,
    },
    viewBox: {
      type: String,
      required: false,
      default: "0 0 32 32",
    },
  },
};
</script>
