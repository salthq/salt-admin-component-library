import { App, Plugin } from "vue";

import IconPlus from "./IconPlus.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconPlus);
  },
} as Plugin;

export { IconPlus as SltIconPlus };
