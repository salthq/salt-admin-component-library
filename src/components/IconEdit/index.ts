import { App, Plugin } from "vue";

import IconEdit from "./IconEdit.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconEdit);
  },
} as Plugin;

export { IconEdit as SltIconEdit };