<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g
      ><path
        d="M24.879,11h-1.6l.785-3.141a3.91,3.91,0,1,0-7.587-1.9L15.219,11H13V10a1,1,0,0,0-1-1H2a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1H12a1,1,0,0,0,1-1V27h.449a4.1,4.1,0,0,1,2.287.693l.419.279A6.1,6.1,0,0,0,19.551,29h5.328A6.118,6.118,0,0,0,31,22.879V17.121A6.118,6.118,0,0,0,24.879,11ZM11,27H3V11h8Zm18-4.121A4.119,4.119,0,0,1,24.879,27H19.551a4.1,4.1,0,0,1-2.287-.693l-.419-.279A6.1,6.1,0,0,0,13.449,25H13V13h3a1,1,0,0,0,.97-.757l1.449-5.8a1.91,1.91,0,1,1,3.706.927L21.03,11.757A1,1,0,0,0,22,13h2.879A4.119,4.119,0,0,1,29,17.121ZM9,24a1,1,0,1,1-1-1A1,1,0,0,1,9,24Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconLike",
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
      default: 24,
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0.5,
    },
    viewBox: {
      type: String,
      required: false,
      default: "0 0 32 32",
    },
  },
};
</script>
