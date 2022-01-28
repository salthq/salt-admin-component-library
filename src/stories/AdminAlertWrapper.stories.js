import AdminAlertWrapper from "../components/AdminAlertWrapper/AdminAlertWrapper.vue";

export default {
  title: "Admin Alert Wrapper",
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

const Template = (args) => ({
  components: { AdminAlertWrapper },
  setup() {
    return { args };
  },
  template:
    '<admin-alert-wrapper v-bind="args"> This is an alert </admin-alert-wrapper>',
});

export const Default = Template.bind({});
