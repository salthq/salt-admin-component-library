import SltIconLoading from "../../src/components/IconLoading/IconLoading.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Loading",
  component: SltIconLoading,
  argTypes: IconArgTypes,
};

export const Loading = (args) => ({
  components: { SltIconLoading },
  setup() {
    return { args };
  },
  template: "<slt-icon-loading v-bind='args' />",
});
