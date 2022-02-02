import { App, Plugin } from "vue";

import IconNotification from "./IconNotification.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconNotification);
  },
} as Plugin;

export { IconNotification as SltIconCopy };