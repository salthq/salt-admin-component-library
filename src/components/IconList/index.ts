import { App, Plugin } from "vue";

import IconList from "./IconList.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconList);
  },
} as Plugin;

export { IconList as SltIconList };