import { App, Plugin } from "vue";

import IconExport from "./IconExport.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconExport);
  },
} as Plugin;

export { IconExport as SltIconExport };