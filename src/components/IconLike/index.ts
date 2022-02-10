import { App, Plugin } from "vue";

import IconLike from "./IconLike.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconLike);
  },
} as Plugin;

export { IconLike as SltIconLike };
