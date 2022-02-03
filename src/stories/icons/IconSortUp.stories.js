import SltIconSortUp from "../../components/IconSortUp/IconSortUp.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Sort Up",
  component: SltIconSortUp,
  argTypes: IconArgTypes,
};

export const SortUp = (args) => ({
  components: { SltIconSortUp },
  setup() {
    return { args };
  },
  template: "<slt-icon-sort-up v-bind='args' />",
});
