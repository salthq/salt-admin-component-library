import { App, Plugin } from "vue";

import IconCross from "./IconCross.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconCross);
  },
} as Plugin;

export { IconCross as SltIconCross };