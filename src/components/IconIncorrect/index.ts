import { App, Plugin } from "vue";

import IconIncorrect from "./IconIncorrect.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconIncorrect);
  },
} as Plugin;

export { IconIncorrect as SltIconIncorrect };
