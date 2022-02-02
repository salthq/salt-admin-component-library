import { App, Plugin } from "vue";

import IconEye from "./IconEye.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconEye);
  },
} as Plugin;

export { IconEye as SltIconEye };