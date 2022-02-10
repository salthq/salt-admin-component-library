import { App, Plugin } from "vue";

import IconAttachment from "./IconAttachment.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconAttachment);
  },
} as Plugin;

export { IconAttachment as SltIconAttachment };
