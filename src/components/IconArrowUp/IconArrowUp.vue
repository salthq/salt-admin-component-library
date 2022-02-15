<template>
  <icon-wrapper v-bind="props">
    <g>
      <path
        d="M6.23879 20.7299C6.25095 20.4502 6.37375 20.177 6.58018 19.9706L15.2891 11.2617C15.6015 10.9492 16.1081 10.9492 16.4205 11.2617L25.1299 19.9711C25.3364 20.1775 25.4592 20.4507 25.4713 20.7304C25.4835 21.0102 25.384 21.2737 25.1948 21.4629C25.0056 21.6521 24.7421 21.7516 24.4623 21.7394C24.1826 21.7272 23.9094 21.6044 23.703 21.398L15.9962 13.6912C15.9181 13.6131 15.7915 13.6131 15.7134 13.6912L8.0071 21.3975C7.80068 21.604 7.52754 21.7268 7.24778 21.7389C6.96802 21.7511 6.70454 21.6516 6.51532 21.4624C6.3261 21.2732 6.22663 21.0097 6.23879 20.7299Z"
      />
    </g>
  </icon-wrapper>
</template>

<script setup lang="ts">
import IconWrapper from "../IconWrapper.vue";

const props = withDefaults(
  defineProps<{
    fill?: string;
    size?: number;
    strokeWidth?: number;
    viewBox?: string;
  }>(),
  {
    fill: "currentColor",
    size: 16,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>
