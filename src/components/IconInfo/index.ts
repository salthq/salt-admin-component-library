import { App, Plugin } from "vue";

import IconInfo from "./IconInfo.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconInfo);
  },
} as Plugin;

export { IconInfo as SltIconInfo };