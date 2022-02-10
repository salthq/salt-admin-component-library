import { App, Plugin } from "vue";

import IconFile from "./IconFile.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconFile);
  },
} as Plugin;

export { IconFile as SltIconFile };
