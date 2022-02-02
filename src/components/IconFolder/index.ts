import { App, Plugin } from "vue";

import IconFolder from "./IconFolder.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconFolder);
  },
} as Plugin;

export { IconFolder as SltIconFolder };