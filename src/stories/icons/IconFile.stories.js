import SltIconFile from "../../components/IconFile/IconFile.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/File",
  component: SltIconFile,
  argTypes: IconArgTypes,
};

export const File = (args) => ({
  components: { SltIconFile },
  setup() {
    return { args };
  },
  template: "<slt-icon-file v-bind='args' />",
});
