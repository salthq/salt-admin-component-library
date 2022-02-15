import SltIconPlay from "../../src/components/IconPlay/IconPlay.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Play",
  component: SltIconPlay,
  argTypes: IconArgTypes,
};

export const Play = (args) => ({
  components: { SltIconPlay },
  setup() {
    return { args };
  },
  template: "<slt-icon-play v-bind='args' />",
});
