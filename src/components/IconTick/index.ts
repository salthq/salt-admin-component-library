import { App, Plugin } from "vue";

import IconTick from "./IconTick.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconTick);
  },
} as Plugin;

export { IconTick as SltIconTick };
