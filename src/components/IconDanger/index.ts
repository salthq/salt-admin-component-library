import { App, Plugin } from "vue";

import IconDanger from "./IconDanger.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDanger);
  },
} as Plugin;

export { IconDanger as SltIconDanger };