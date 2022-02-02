import { App, Plugin } from "vue";

import IconArrowPrev from "./IconArrowPrev.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconArrowPrev);
  },
} as Plugin;

export { IconArrowPrev as SltIconArrowPrev };