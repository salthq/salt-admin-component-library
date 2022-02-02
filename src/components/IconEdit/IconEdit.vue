<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g>
      <path
        d="M27,16V28a3,3,0,0,1-3,3H4a3,3,0,0,1-3-3V8A3,3,0,0,1,4,5H16a1,1,0,0,1,0,2H4A1,1,0,0,0,3,8V28a1,1,0,0,0,1,1H24a1,1,0,0,0,1-1V16a1,1,0,0,1,2,0Zm3.707-9.293-12,12A1,1,0,0,1,18,19H14a1,1,0,0,1-1-1V14a1,1,0,0,1,.293-.707l12-12a1,1,0,0,1,1.414,0l4,4A1,1,0,0,1,30.707,6.707ZM28.586,6,26,3.414l-11,11V17h2.586Z"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconEdit",
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
      default: 18,
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
