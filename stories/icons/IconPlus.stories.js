import SltIconPlus from "../../src/components/IconPlus/IconPlus.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Plus",
  component: SltIconPlus,
  argTypes: IconArgTypes,
};

export const Plus = (args) => ({
  components: { SltIconPlus },
  setup() {
    return { args };
  },
  template: "<slt-icon-plus v-bind='args' />",
});
