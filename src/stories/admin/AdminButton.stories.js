import SltAdminButton from "../../components/AdminButton/AdminButton.vue";

export default {
  title: "Admin/Button",
  component: SltAdminButton,
  argTypes: {
    onClick: {},
    disabled: {
      defaultValue: false,
    },
    icon: {
      control: { type: "select" },
      options: ["", "icon-archive", "icon-copy"],
    },
    loading: {
      defaultValue: false,
    },
    label: {
      control: { type: "text" },
      defaultValue: "Save",
    },
    type: {
      control: { type: "select" },
      options: ["submit", "button", "reset"],
      defaultValue: "button",
    },
    variation: {
      control: { type: "select" },
      options: ["primary", "danger", "secondary", "white"],
      defaultValue: "primary",
    },
  },
};

const Template = (args) => ({
  components: { SltAdminButton },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-button v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  type: "button",
  variation: "primary",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  type: "button",
  variation: "secondary",
  icon: "icon-copy",
  label: "Copy",
};
