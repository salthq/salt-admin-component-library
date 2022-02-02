import SltIconDislike from "../../components/IconDislike/IconDislike.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Dislike",
  component: SltIconDislike,
  argTypes: IconArgTypes,
};

export const Dislike = (args) => ({
  components: { SltIconDislike },
  setup() {
    return { args };
  },
  template: "<slt-icon-dislike v-bind='args' />",
});
