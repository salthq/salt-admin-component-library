import { App, Plugin } from "vue";

import IconLink from "./IconLink.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconLink);
  },
} as Plugin;

export { IconLink as SltIconLink };