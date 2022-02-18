<script lang="ts">
export default {
  name: "SltIconRefresh",
};
</script>

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
    size: 20,
    strokeWidth: 0,
    viewBox: "0 0 32 32",
  }
);
</script>

<template>
  <icon-wrapper v-bind="props">
    <g id="refresh">
      <rect
        width="32"
        height="32"
        transform="translate(32 32) rotate(180)"
        style="fill: none"
      />
      <path
        d="M28,15.857a11.819,11.819,0,0,1-7.637,11.075,1,1,0,0,1-1.295-.563.988.988,0,0,1,.568-1.283A9.881,9.881,0,0,0,18,6.153l.828,1.231a.984.984,0,0,1-.277,1.374,1.006,1.006,0,0,1-1.387-.275l-2-2.971a.989.989,0,0,1,0-1.1l2-2.971a1,1,0,0,1,1.387-.275.983.983,0,0,1,.277,1.373l-1.06,1.576A11.931,11.931,0,0,1,28,15.857ZM14.229,27.884l-1.06,1.576a.983.983,0,0,0,.277,1.373,1,1,0,0,0,1.387-.275l2-2.971a.989.989,0,0,0,0-1.1l-2-2.971a1.006,1.006,0,0,0-1.387-.275.984.984,0,0,0-.277,1.374L14,25.847A9.881,9.881,0,0,1,12.364,6.914a.988.988,0,0,0,.568-1.283,1,1,0,0,0-1.295-.563,11.851,11.851,0,0,0,2.592,22.816Z"
      />
    </g>
  </icon-wrapper>
</template>
