import { App, Plugin } from "vue";

import IconClose from "./IconClose.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconClose);
  },
} as Plugin;

export { IconClose as SltIconClose };