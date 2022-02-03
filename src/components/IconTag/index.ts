import { App, Plugin } from "vue";

import IconTag from "./IconTag.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconTag);
  },
} as Plugin;

export { IconTag as SltIconTag };