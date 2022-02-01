import { App, Plugin } from "vue";

import IconArchive from "./IconArchive.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconArchive);
  },
} as Plugin;

export { IconArchive as SltIconArchive };
