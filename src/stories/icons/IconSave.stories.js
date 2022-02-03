import SltIconSave from "../../components/IconSave/IconSave.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Save",
  component: SltIconSave,
  argTypes: IconArgTypes,
};

export const Save = (args) => ({
  components: { SltIconSave },
  setup() {
    return { args };
  },
  template: "<slt-icon-save v-bind='args' />",
});
