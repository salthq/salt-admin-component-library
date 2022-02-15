import SltIconArrowDown from "../../src/components/IconArrowDown/IconArrowDown.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Arrow Down",
  component: SltIconArrowDown,
  argTypes: IconArgTypes,
};

export const ArrowDown = (args) => ({
  components: { SltIconArrowDown },
  setup() {
    return { args };
  },
  template: "<slt-icon-arrow-down v-bind='args' />",
});
