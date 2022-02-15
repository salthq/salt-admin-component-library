import SltIconEye from "../../src/components/IconEye/IconEye.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Eye",
  component: SltIconEye,
  argTypes: IconArgTypes,
};

export const Eye = (args) => ({
  components: { SltIconEye },
  setup() {
    return { args };
  },
  template: "<slt-icon-eye v-bind='args' />",
});
