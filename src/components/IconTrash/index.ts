import { App, Plugin } from "vue";

import IconTrash from "./IconTrash.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconTrash);
  },
} as Plugin;

export { IconTrash as SltIconTrash };