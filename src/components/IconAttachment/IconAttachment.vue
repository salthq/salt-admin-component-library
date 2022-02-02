<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g
      ><path
        d="M22,24H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-10H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V11A1,1,0,0,0,22,10Zm-1,6H15V12h6Zm1,8H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-10H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V11A1,1,0,0,0,22,10Zm-1,6H15V12h6Zm1,8H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-4H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-10H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V11A1,1,0,0,0,22,10Zm-1,6H15V12h6Zm1-6H14a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V11A1,1,0,0,0,22,10Zm-1,6H15V12h6Zm1,4H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0,4H14a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2ZM26,5H24V3a2.006,2.006,0,0,0-2-2H6A2.006,2.006,0,0,0,4,3V25a2.006,2.006,0,0,0,2,2H8v2a2.006,2.006,0,0,0,2,2H26a2.006,2.006,0,0,0,2-2V7A2.006,2.006,0,0,0,26,5ZM8,7V25H6V3H22V5H10A2.006,2.006,0,0,0,8,7ZM26,29H10V7H26ZM14,18h8a1,1,0,0,0,1-1V11a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v6A1,1,0,0,0,14,18Zm1-6h6v4H15ZM14,22h8a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Zm0,4h8a1,1,0,0,0,0-2H14a1,1,0,0,0,0,2Z"
    /></g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconAttachment",
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
