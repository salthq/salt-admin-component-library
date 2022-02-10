import { App, Plugin } from "vue";

import IconDrag from "./IconDrag.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconDrag);
  },
} as Plugin;

export { IconDrag as SltIconDrag };
