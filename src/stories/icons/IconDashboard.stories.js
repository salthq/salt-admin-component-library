import SltIconDashboard from "../../components/IconDashboard/IconDashboard.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Dashboard",
  component: SltIconDashboard,
  argTypes: IconArgTypes,
};

export const Dashboard = (args) => ({
  components: { SltIconDashboard },
  setup() {
    return { args };
  },
  template: "<slt-icon-dashboard v-bind='args' />",
});
