<!-- Viewport: 0 0 20 20 -->
<template>
  <icon-wrapper v-bind="$props">
    <g id="list"
      ><path
        d="M5,31a3,3,0,1,1,3-3A3,3,0,0,1,5,31Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,5,27Zm0-8a3,3,0,1,1,3-3A3,3,0,0,1,5,19Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,5,15ZM5,7A3,3,0,1,1,8,4,3,3,0,0,1,5,7ZM5,3A1,1,0,1,0,6,4,1,1,0,0,0,5,3ZM30,28a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H29A1,1,0,0,0,30,28Zm0-12a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H29A1,1,0,0,0,30,16ZM30,4a1,1,0,0,0-1-1H13a1,1,0,0,0,0,2H29A1,1,0,0,0,30,4Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconList",
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
