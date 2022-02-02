import SltAdminAlertWrapper from "../../components/AdminAlertWrapper/AdminAlertWrapper.vue";

export default {
  title: "Admin/Alert",
  components: SltAdminAlertWrapper,
  argTypes: {
    dismissable: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    variation: {
      control: { type: "select" },
      options: ["success", "warning", "failure"],
      defaultValue: "success",
    },
  },
};

const Template = (args) => ({
  components: { SltAdminAlertWrapper },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-alert-wrapper v-bind="args">This is an alert</slt-admin-alert-wrapper>`,
});

export const Dismissable = Template.bind({});

Dismissable.args = {
  dismissable: true,
};

export const Success = Template.bind({});

Success.args = {
  variation: "success",
};

export const Warning = Template.bind({});

Warning.args = {
  variation: "warning",
};

export const Failure = Template.bind({});

Failure.args = {
  variation: "failure",
};
