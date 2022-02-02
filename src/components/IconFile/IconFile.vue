<!-- viewBox="0 0 33 44" -->

<template>
  <icon-wrapper v-bind="$props">
    <g>
      <path
        d="M 32 6 C 24.8 6 19 11.8 19 19 L 19 109 C 19 116.2 24.8 122 32 122 L 96 122 C 103.2 122 109 116.2 109 109 L 109 19 C 109 11.8 103.2 6 96 6 L 32 6 z M 32 12 L 96 12 C 99.9 12 103 15.1 103 19 L 103 109 C 103 112.9 99.9 116 96 116 L 32 116 C 28.1 116 25 112.9 25 109 L 25 19 C 25 15.1 28.1 12 32 12 z M 52 26 C 50.3 26 49 27.3 49 29 C 49 30.7 50.3 32 52 32 L 76 32 C 77.7 32 79 30.7 79 29 C 79 27.3 77.7 26 76 26 L 52 26 z M 42 56 C 40.3 56 39 57.3 39 59 C 39 60.7 40.3 62 42 62 L 86 62 C 87.7 62 89 60.7 89 59 C 89 57.3 87.7 56 86 56 L 42 56 z M 42 71 C 40.3 71 39 72.3 39 74 C 39 75.7 40.3 77 42 77 L 86 77 C 87.7 77 89 75.7 89 74 C 89 72.3 87.7 71 86 71 L 42 71 z M 42.199219 86 C 40.499219 86 39.199219 87.3 39.199219 89 C 39.199219 90.7 40.499219 92 42.199219 92 L 66.199219 92 C 67.899219 92 69.199219 90.7 69.199219 89 C 69.199219 87.3 67.899219 86 66.199219 86 L 42.199219 86 z M 82 86 C 80.3 86 79 87.3 79 89 C 79 90.7 80.3 92 82 92 L 86 92 C 87.7 92 89 90.7 89 89 C 89 87.3 87.7 86 86 86 L 82 86 z"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconFile",
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
      default: 40,
    },
    strokeWidth: {
      type: Number,
      required: false,
      default: 0,
    },
    viewBox: {
      type: String,
      required: false,
      default: "0 0 128 128",
    },
  },
};
</script>
