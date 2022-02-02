import SltIconFilter from "../../components/IconFilter/IconFilter.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Filter",
  component: SltIconFilter,
  argTypes: IconArgTypes,
};

export const Filter = (args) => ({
  components: { SltIconFilter },
  setup() {
    return { args };
  },
  template: "<slt-icon-filter v-bind='args' />",
});
