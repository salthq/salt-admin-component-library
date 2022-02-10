import { App, Plugin } from "vue";

import IconArrowNext from "./IconArrowNext.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconArrowNext);
  },
} as Plugin;

export { IconArrowNext as SltIconArrowNext };
