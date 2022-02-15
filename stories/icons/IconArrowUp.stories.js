import SltIconArrowUp from "../../src/components/IconArrowUp/IconArrowUp.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Arrow Up",
  component: SltIconArrowUp,
  argTypes: IconArgTypes,
};

export const ArrowUp = (args) => ({
  components: { SltIconArrowUp },
  setup() {
    return { args };
  },
  template: "<slt-icon-arrow-up v-bind='args' />",
});
