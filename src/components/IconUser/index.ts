import { App, Plugin } from "vue";

import IconUser from "./IconUser.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, IconUser);
  },
} as Plugin;

export { IconUser as SltIconUser };