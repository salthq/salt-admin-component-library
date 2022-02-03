import { App, Plugin } from "vue";

import IconSortDown from "./IconSortDown.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconSortDown);
  },
} as Plugin;

export { IconSortDown as SltIconSortDown };