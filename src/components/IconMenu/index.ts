import { App, Plugin } from "vue";

import IconMenu from "./IconMenu.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconMenu);
  },
} as Plugin;

export { IconMenu as SltIconMenu };
