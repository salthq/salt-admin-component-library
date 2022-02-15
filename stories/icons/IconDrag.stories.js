import SltIconDrag from "../../src/components/IconDrag/IconDrag.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Drag",
  component: SltIconDrag,
  argTypes: IconArgTypes,
};

export const Drag = (args) => ({
  components: { SltIconDrag },
  setup() {
    return { args };
  },
  template: "<slt-icon-drag v-bind='args' />",
});
