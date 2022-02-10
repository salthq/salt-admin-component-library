import { App, Plugin } from "vue";

import IconUnarchive from "./IconUnarchive.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconUnarchive);
  },
} as Plugin;

export { IconUnarchive as SltIconUnarchive };
