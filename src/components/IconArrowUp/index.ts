import { App, Plugin } from "vue";

import IconArrowUp from "./IconArrowUp.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconArrowUp);
  },
} as Plugin;

export { IconArrowUp as SltIconArrowUp };
