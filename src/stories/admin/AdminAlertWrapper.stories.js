import AdminAlertWrapper from "../../components/AdminAlertWrapper/AdminAlertWrapper.vue";

export default {
  title: "Admin/Alert",
  components: AdminAlertWrapper,
  argTypes: {
    dismissable: {
      control: { type: "boolean" },
    },
    variation: {
      control: { type: "select" },
      options: ["success", "warning", "failure"],
    },
  },
};

export const Alert = (args) => ({
  components: { AdminAlertWrapper },
  setup() {
    return { args };
  },
  template:
    '<admin-alert-wrapper v-bind="args"> This is an alert </admin-alert-wrapper>',
});
