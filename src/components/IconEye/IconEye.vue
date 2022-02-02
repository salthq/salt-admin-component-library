<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g>
      <path
        d="M30.912,18.59a15.446,15.446,0,0,0-6.5-6.585l3.3-3.3a1,1,0,1,0-1.414-1.414L22.456,11.13A17.9,17.9,0,0,0,17,10.047V5a1,1,0,0,0-2,0v5.047A17.9,17.9,0,0,0,9.544,11.13L5.707,7.293A1,1,0,1,0,4.293,8.707l3.3,3.3a15.446,15.446,0,0,0-6.5,6.585,1,1,0,0,0,0,.82C1.246,19.761,5.081,28,16,28s14.754-8.239,14.912-8.59A1,1,0,0,0,30.912,18.59ZM16,26C7.626,26,4,20.579,3.126,19A14.377,14.377,0,0,1,16,12c8.371,0,12,5.417,12.874,7A14.377,14.377,0,0,1,16,26Zm0-13a6,6,0,1,0,6,6A6.006,6.006,0,0,0,16,13Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,16,23Z"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconEye",
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
      default: 20,
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
