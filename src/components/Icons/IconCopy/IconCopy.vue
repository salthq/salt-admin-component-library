<!-- viewBox="0 0 32 32" -->

<template>
  <icon-wrapper v-bind="$props">
    <g
      ><path
        d="M26,31H10a2,2,0,0,1-2-2V7a2,2,0,0,1,2-2H26a2,2,0,0,1,2,2V29A2,2,0,0,1,26,31ZM10,7V29H26V7ZM6,26V4A1,1,0,0,1,7,3H23a1,1,0,0,0,0-2H7A3,3,0,0,0,4,4V26a1,1,0,0,0,2,0Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";

export default {
  name: "SltIconCopy",
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
      default: 16,
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
