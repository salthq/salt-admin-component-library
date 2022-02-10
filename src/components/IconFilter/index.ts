import { App, Plugin } from "vue";

import IconFilter from "./IconFilter.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconFilter);
  },
} as Plugin;

export { IconFilter as SltIconFilter };
