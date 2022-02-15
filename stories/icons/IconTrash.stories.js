import SltIconTrash from "../../src/components/IconTrash/IconTrash.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Trash",
  component: SltIconTrash,
  argTypes: IconArgTypes,
};

export const Trash = (args) => ({
  components: { SltIconTrash },
  setup() {
    return { args };
  },
  template: "<slt-icon-trash v-bind='args' />",
});
