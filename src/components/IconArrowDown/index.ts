import { App, Plugin } from "vue";

import IconArrowDown from "./IconArrowDown.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconArrowDown);
  },
} as Plugin;

export { IconArrowDown as SltIconArrowDown };