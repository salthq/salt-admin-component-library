import SltIconLike from "../../src/components/IconLike/IconLike.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Like",
  component: SltIconLike,
  argTypes: IconArgTypes,
};

export const Like = (args) => ({
  components: { SltIconLike },
  setup() {
    return { args };
  },
  template: "<slt-icon-like v-bind='args' />",
});
