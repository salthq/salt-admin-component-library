<!-- Viewport: 0 0 20 20 -->
<template>
  <icon-wrapper v-bind="$props">
    <g id="menu_dots" data-name="menu dots"
      ><path
        d="M8,15a7,7,0,1,1,7-7A7.008,7.008,0,0,1,8,15ZM8,3a5,5,0,1,0,5,5A5.006,5.006,0,0,0,8,3ZM24,15a7,7,0,1,1,7-7A7.008,7.008,0,0,1,24,15ZM24,3a5,5,0,1,0,5,5A5.006,5.006,0,0,0,24,3ZM8,31a7,7,0,1,1,7-7A7.008,7.008,0,0,1,8,31ZM8,19a5,5,0,1,0,5,5A5.006,5.006,0,0,0,8,19ZM24,31a7,7,0,1,1,7-7A7.008,7.008,0,0,1,24,31Zm0-12a5,5,0,1,0,5,5A5.006,5.006,0,0,0,24,19Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconTile",
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
