<!-- viewBox="0 0 26 26" -->

<template>
  <icon-wrapper v-bind="$props">
    <g>
      <path
        d="M16.68,20.173a.838.838,0,0,1,0,1.185l-2.515,2.515a.838.838,0,0,1-1.185,0l-2.515-2.515a.838.838,0,1,1,1.185-1.185l1.084,1.084V13.221a.838.838,0,0,1,1.676,0v8.036L15.5,20.173A.838.838,0,0,1,16.68,20.173Zm3.6-12.82a5.784,5.784,0,0,0-1.341.156A5.867,5.867,0,0,0,8.251,7.389a4.379,4.379,0,0,0-.545-.035,5.034,5.034,0,0,0-5.029,5.029c0,.147.008.3.023.447A3.317,3.317,0,0,0,1,15.736a3.353,3.353,0,0,0,3.353,3.353H9.382a.838.838,0,1,0,0-1.676H4.353a1.668,1.668,0,0,1-.478-3.269.838.838,0,0,0,.575-.994A3.3,3.3,0,0,1,8.563,9.158.838.838,0,0,0,9.578,8.6a4.191,4.191,0,0,1,8.034.168.838.838,0,0,0,1.12.559,4.191,4.191,0,1,1,1.546,8.084H17.764a.838.838,0,0,0,0,1.676h2.515a5.867,5.867,0,1,0,0-11.735Z"
        transform="translate(-0.162 -0.648)"
      />
    </g>
  </icon-wrapper>
</template>

<script lang="ts">
import IconWrapper from "../IconWrapper.vue";
export default {
  name: "SltIconDownload",
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
      default: 0.5,
    },
    viewBox: {
      type: String,
      required: false,
      default: "0 0 26 26",
    },
  },
};
</script>
