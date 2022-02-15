import SltIconArrowNext from "../../src/components/IconArrowNext/IconArrowNext.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Arrow Next",
  component: SltIconArrowNext,
  argTypes: IconArgTypes,
};

export const ArrowNext = (args) => ({
  components: { SltIconArrowNext },
  setup() {
    return { args };
  },
  template: "<slt-icon-arrow-next v-bind='args' />",
});
