import SltIconRefresh from "../../src/components/IconRefresh/IconRefresh.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Refresh",
  component: SltIconRefresh,
  argTypes: IconArgTypes,
};

export const Refresh = (args) => ({
  components: { SltIconRefresh },
  setup() {
    return { args };
  },
  template: "<slt-icon-refresh v-bind='args' />",
});
