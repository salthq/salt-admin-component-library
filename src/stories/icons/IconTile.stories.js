import SltIconTile from "../../components/IconTile/IconTile.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Tile",
  component: SltIconTile,
  argTypes: IconArgTypes,
};

export const Tile = (args) => ({
  components: { SltIconTile },
  setup() {
    return { args };
  },
  template: "<slt-icon-tile v-bind='args' />",
});
