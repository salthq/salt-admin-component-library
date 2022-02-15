import SltIconSortDown from "../../src/components/IconSortDown/IconSortDown.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Sort Down",
  component: SltIconSortDown,
  argTypes: IconArgTypes,
};

export const SortDown = (args) => ({
  components: { SltIconSortDown },
  setup() {
    return { args };
  },
  template: "<slt-icon-sort-down v-bind='args' />",
});
