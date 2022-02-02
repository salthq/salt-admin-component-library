import SltIconInfo from "../../components/IconInfo/IconInfo.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Info",
  component: SltIconInfo,
  argTypes: IconArgTypes,
};

export const Info = (args) => ({
  components: { SltIconInfo },
  setup() {
    return { args };
  },
  template: "<slt-icon-info v-bind='args' />",
});
