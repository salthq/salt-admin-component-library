import SltIconFolder from "../../components/IconFolder/IconFolder.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Folder",
  component: SltIconFolder,
  argTypes: IconArgTypes,
};

export const Folder = (args) => ({
  components: { SltIconFolder },
  setup() {
    return { args };
  },
  template: "<slt-icon-folder v-bind='args' />",
});
