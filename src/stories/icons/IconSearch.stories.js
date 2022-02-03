import SltIconSearch from "../../components/IconSearch/IconSearch.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Search",
  component: SltIconSearch,
  argTypes: IconArgTypes,
};

export const Search = (args) => ({
  components: { SltIconSearch },
  setup() {
    return { args };
  },
  template: "<slt-icon-search v-bind='args' />",
});
