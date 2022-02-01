import SltIconCopy from "../../components/IconCopy/IconCopy.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Copy",
  component: SltIconCopy,
  argTypes: IconArgTypes,
};

export const Copy = (args) => ({
  components: { SltIconCopy },
  setup() {
    return { args };
  },
  template: "<slt-icon-copy v-bind='args' />",
});
