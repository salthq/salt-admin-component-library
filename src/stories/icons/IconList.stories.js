import SltIconList from "../../components/IconList/IconList.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/List",
  component: SltIconList,
  argTypes: IconArgTypes,
};

export const List = (args) => ({
  components: { SltIconList },
  setup() {
    return { args };
  },
  template: "<slt-icon-list v-bind='args' />",
});
