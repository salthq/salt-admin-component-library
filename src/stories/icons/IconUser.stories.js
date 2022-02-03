import SltIconUser from "../../components/IconUser/IconUser.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/User",
  component: SltIconUser,
  argTypes: IconArgTypes,
};

export const User = (args) => ({
  components: { SltIconUser },
  setup() {
    return { args };
  },
  template: "<slt-icon-user v-bind='args' />",
});
