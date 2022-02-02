import SltIconNotification from "../../components/IconNotification/IconNotification.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Notification",
  component: SltIconNotification,
  argTypes: IconArgTypes,
};

export const Notification = (args) => ({
  components: { SltIconNotification },
  setup() {
    return { args };
  },
  template: "<slt-icon-notification v-bind='args' />",
});
