import SltIconArchive from "../../components/IconArchive/IconArchive.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Archive",
  component: SltIconArchive,
  argTypes: IconArgTypes,
};

export const Archive = (args) => ({
  components: { SltIconArchive },
  setup() {
    return { args };
  },
  template: "<slt-icon-archive v-bind='args' />",
});
