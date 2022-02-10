import { App, Plugin } from "vue";

import IconSearch from "./IconSearch.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconSearch);
  },
} as Plugin;

export { IconSearch as SltIconSearch };
