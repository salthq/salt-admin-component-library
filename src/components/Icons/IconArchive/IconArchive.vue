<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g id="icon-archive">
      <path
        d="M22,30a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V2A1,1,0,0,1,2,1H22a1,1,0,0,1,1,1v9a1,1,0,0,1-2,0V3H3V29H21A1,1,0,0,1,22,30ZM7,8h4a1,1,0,0,0,0-2H7A1,1,0,0,0,7,8Zm11,5a1,1,0,0,0-1-1H7a1,1,0,0,0,0,2H17A1,1,0,0,0,18,13Zm-5,5H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm0,6H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Zm17.707-6.293-9,9A1,1,0,0,1,21,27H17a1,1,0,0,1-1-1V22a1,1,0,0,1,.293-.707l9-9a1,1,0,0,1,1.414,0l4,4A1,1,0,0,1,30.707,17.707ZM28.586,17,26,14.414l-8,8V25h2.586Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconArchive",
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
