import SltIconTag from "../../src/components/IconTag/IconTag.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Tag",
  component: SltIconTag,
  argTypes: IconArgTypes,
};

export const Tag = (args) => ({
  components: { SltIconTag },
  setup() {
    return { args };
  },
  template: "<slt-icon-tag v-bind='args' />",
});
