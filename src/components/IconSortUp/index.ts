import { App, Plugin } from "vue";

import IconSortUp from "./IconSortUp.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconSortUp);
  },
} as Plugin;

export { IconSortUp as SltIconSortUp };