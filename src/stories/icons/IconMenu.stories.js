import SltIconMenu from "../../components/IconMenu/IconMenu.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Menu",
  component: SltIconMenu,
  argTypes: IconArgTypes,
};

export const Menu = (args) => ({
  components: { SltIconMenu },
  setup() {
    return { args };
  },
  template: "<slt-icon-menu v-bind='args' />",
});
