<!-- viewBox="0 0 32 32" -->

<template>
  <icon-wrapper v-bind="$props">
    <g>
      <path
        d="M25.4713 12.0378C25.4592 12.3176 25.3364 12.5907 25.1299 12.7971L16.421 21.5061C16.1086 21.8185 15.602 21.8185 15.2896 21.5061L6.58018 12.7967C6.37375 12.5902 6.25095 12.3171 6.23879 12.0373C6.22663 11.7576 6.3261 11.4941 6.51532 11.3049C6.70455 11.1157 6.96802 11.0162 7.24778 11.0283C7.52754 11.0405 7.80068 11.1633 8.0071 11.3697L15.7139 19.0765C15.792 19.1546 15.9186 19.1546 15.9967 19.0765L23.703 11.3702C23.9094 11.1638 24.1826 11.041 24.4623 11.0288C24.7421 11.0167 25.0056 11.1161 25.1948 11.3054C25.384 11.4946 25.4835 11.7581 25.4713 12.0378Z"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconArrowDown",
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
