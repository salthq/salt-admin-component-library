import SltIconIncorrect from "../../components/IconIncorrect/IconIncorrect.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Incorrect",
  component: SltIconIncorrect,
  argTypes: IconArgTypes,
};

export const Incorrect = (args) => ({
  components: { SltIconIncorrect },
  setup() {
    return { args };
  },
  template: "<slt-icon-incorrect v-bind='args' />",
});
