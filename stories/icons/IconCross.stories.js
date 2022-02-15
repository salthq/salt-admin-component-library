import SltIconCross from "../../src/components/IconCross/IconCross.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Cross",
  component: SltIconCross,
  argTypes: IconArgTypes,
};

export const Cross = (args) => ({
  components: { SltIconCross },
  setup() {
    return { args };
  },
  template: "<slt-icon-cross v-bind='args' />",
});
