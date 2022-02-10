import { App, Plugin } from "vue";

import IconImage from "./IconImage.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconImage);
  },
} as Plugin;

export { IconImage as SltIconImage };
