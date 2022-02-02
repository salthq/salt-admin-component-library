import SltIconEdit from "../../components/IconEdit/IconEdit.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Edit",
  component: SltIconEdit,
  argTypes: IconArgTypes,
};

export const Edit = (args) => ({
  components: { SltIconEdit },
  setup() {
    return { args };
  },
  template: "<slt-icon-edit v-bind='args' />",
});
