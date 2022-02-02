import SltIconLink from "../../components/IconLink/IconLink.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Link",
  component: SltIconLink,
  argTypes: IconArgTypes,
};

export const Link = (args) => ({
  components: { SltIconLink },
  setup() {
    return { args };
  },
  template: "<slt-icon-link v-bind='args' />",
});
