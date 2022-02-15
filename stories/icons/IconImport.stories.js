import SltIconImport from "../../src/components/IconImport/IconImport.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Import",
  component: SltIconImport,
  argTypes: IconArgTypes,
};

export const Import = (args) => ({
  components: { SltIconImport },
  setup() {
    return { args };
  },
  template: "<slt-icon-import v-bind='args' />",
});
