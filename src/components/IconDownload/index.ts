import { App, Plugin } from "vue";

import IconDownload from "./IconDownload.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDownload);
  },
} as Plugin;

export { IconDownload as SltIconDownload };
