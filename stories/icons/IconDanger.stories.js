import SltIconDanger from "../../src/components/IconDanger/IconDanger.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Danger",
  component: SltIconDanger,
  argTypes: IconArgTypes,
};

export const Danger = (args) => ({
  components: { SltIconDanger },
  setup() {
    return { args };
  },
  template: "<slt-icon-danger v-bind='args' />",
});
