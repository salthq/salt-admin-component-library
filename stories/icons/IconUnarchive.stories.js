import SltIconUnarchive from "../../src/components/IconUnarchive/IconUnarchive.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Unarchive",
  component: SltIconUnarchive,
  argTypes: IconArgTypes,
};

export const Unarchive = (args) => ({
  components: { SltIconUnarchive },
  setup() {
    return { args };
  },
  template: "<slt-icon-unarchive v-bind='args' />",
});
