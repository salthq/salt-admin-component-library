import SltIconClose from "../../components/IconClose/IconClose.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Close",
  component: SltIconClose,
  argTypes: IconArgTypes,
};

export const Close = (args) => ({
  components: { SltIconClose },
  setup() {
    return { args };
  },
  template: "<slt-icon-close v-bind='args' />",
});
