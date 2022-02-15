import SltIconImage from "../../src/components/IconImage/IconImage.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Image",
  component: SltIconImage,
  argTypes: IconArgTypes,
};

export const Image = (args) => ({
  components: { SltIconImage },
  setup() {
    return { args };
  },
  template: "<slt-icon-image v-bind='args' />",
});
