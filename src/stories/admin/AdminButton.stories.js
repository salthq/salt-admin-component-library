import AdminButton from "../../components/AdminButton/AdminButton.vue";

export default {
  title: "Admin/Button",
  component: AdminButton,
  argTypes: {
    onClick: {},
    disabled: {
      defaultValue: false,
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

export const Button = (args) => ({
  components: { AdminButton },
  setup() {
    return { args };
  },
  template: '<admin-button v-bind="args" />',
});

Button.args = {
  type: "button",
  variation: "primary",
};
