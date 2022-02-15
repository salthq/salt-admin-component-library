import SltIconDownload from "../../src/components/IconDownload/IconDownload.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Download",
  component: SltIconDownload,
  argTypes: IconArgTypes,
};

export const Download = (args) => ({
  components: { SltIconDownload },
  setup() {
    return { args };
  },
  template: "<slt-icon-download v-bind='args' />",
});
