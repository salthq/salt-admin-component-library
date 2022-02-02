import SltIconExport from "../../components/IconExport/IconExport.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Export",
  component: SltIconExport,
  argTypes: IconArgTypes,
};

export const Export = (args) => ({
  components: { SltIconExport },
  setup() {
    return { args };
  },
  template: "<slt-icon-export v-bind='args' />",
});
