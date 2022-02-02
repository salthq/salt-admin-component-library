import { App, Plugin } from "vue";

import IconLoading from "./IconLoading.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconLoading);
  },
} as Plugin;

export { IconLoading as SltIconLoading };