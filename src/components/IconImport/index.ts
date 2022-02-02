import { App, Plugin } from "vue";

import IconImport from "./IconImport.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconImport);
  },
} as Plugin;

export { IconImport as SltIconImport };