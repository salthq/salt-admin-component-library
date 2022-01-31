import { App, Plugin } from "vue";

import IconCopy from "./IconCopy.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconCopy);
  },
} as Plugin;

export { IconCopy as SltIconCopy };
