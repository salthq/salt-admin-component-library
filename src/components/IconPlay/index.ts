import { App, Plugin } from "vue";

import IconPlay from "./IconPlay.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconPlay);
  },
} as Plugin;

export { IconPlay as SltIconPlay };
