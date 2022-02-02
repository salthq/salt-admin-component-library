<!-- viewBox="0 0 32 32" -->

<template>
  <icon-wrapper v-bind="$props">
    <g
      ><path
        d="M8,15a3,3,0,1,0-3-3A3,3,0,0,0,8,15Zm0-4a1,1,0,1,1-1,1A1,1,0,0,1,8,11ZM30,5H2A1,1,0,0,0,1,6V26a1,1,0,0,0,1,1H30a1,1,0,0,0,1-1V6A1,1,0,0,0,30,5ZM6.581,25,12.5,17.6,18.419,25Zm14.4,0-3.216-4.02,1.8-2.4L25.273,25ZM29,25H27.949l-7.7-8.665A1,1,0,0,0,18.7,16.4l-2.225,2.967-3.194-3.992a1.036,1.036,0,0,0-1.562,0L4.019,25H3V7H29Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconImage",
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
      default: 75,
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
