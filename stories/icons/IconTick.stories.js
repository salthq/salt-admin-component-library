import SltIconTick from "../../src/components/IconTick/IconTick.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Tick",
  component: SltIconTick,
  argTypes: IconArgTypes,
};

export const Tick = (args) => ({
  components: { SltIconTick },
  setup() {
    return { args };
  },
  template: "<slt-icon-tick v-bind='args' />",
});
