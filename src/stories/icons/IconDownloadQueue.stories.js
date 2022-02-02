import SltIconDownloadQueue from "../../components/IconDownloadQueue/IconDownloadQueue.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Download Queue",
  component: SltIconDownloadQueue,
  argTypes: IconArgTypes,
};

export const DownloadQueue = (args) => ({
  components: { SltIconDownloadQueue },
  setup() {
    return { args };
  },
  template: "<slt-icon-download-queue v-bind='args' />",
});
