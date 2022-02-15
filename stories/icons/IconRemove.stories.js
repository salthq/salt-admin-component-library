import SltIconRemove from "../../src/components/IconRemove/IconRemove.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Remove",
  component: SltIconRemove,
  argTypes: IconArgTypes,
};

export const Remove = (args) => ({
  components: { SltIconRemove },
  setup() {
    return { args };
  },
  template: "<slt-icon-remove v-bind='args' />",
});
