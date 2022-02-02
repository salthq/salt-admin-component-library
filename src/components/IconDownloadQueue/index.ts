import { App, Plugin } from "vue";

import IconDownloadQueue from "./IconDownloadQueue.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDownloadQueue);
  },
} as Plugin;

export { IconDownloadQueue as SltIconDownloadQueue };