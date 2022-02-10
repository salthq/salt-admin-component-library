import { App, Plugin } from "vue";

import IconSave from "./IconSave.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconSave);
  },
} as Plugin;

export { IconSave as SltIconSave };
