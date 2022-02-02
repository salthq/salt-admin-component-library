<!-- Viewport: 0 0 32 32 -->
<template>
  <icon-wrapper v-bind="$props">
    <g id="funnel">
      <rect width="32" height="32" style="fill: none" />
      <path
        d="M29,2a1,1,0,0,0-1-1H4A1,1,0,0,0,3,2V6a1.019,1.019,0,0,0,.226.633L12,17.357V30a1,1,0,0,0,1.555.832l6-4A1,1,0,0,0,20,26V17.357L28.774,6.633A1.012,1.012,0,0,0,29,6ZM5,3H27V5H5ZM18.226,16.367A1,1,0,0,0,18,17v8.465l-4,2.666V17a1,1,0,0,0-.226-.633L6.11,7H25.89Z"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconFilter",
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
