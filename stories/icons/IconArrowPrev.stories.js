import SltIconArrowPrev from "../../src/components/IconArrowPrev/IconArrowPrev.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Arrow Prev",
  component: SltIconArrowPrev,
  argTypes: IconArgTypes,
};

export const ArrowPrev = (args) => ({
  components: { SltIconArrowPrev },
  setup() {
    return { args };
  },
  template: "<slt-icon-arrow-prev v-bind='args' />",
});
