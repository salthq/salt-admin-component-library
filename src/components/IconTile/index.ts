import { App, Plugin } from "vue";

import IconTile from "./IconTile.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconTile);
  },
} as Plugin;

export { IconTile as SltIconTile };
