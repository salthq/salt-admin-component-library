import AdminButton from "../../components/AdminButton/AdminButton.vue";

export default {
  title: "Admin/Button",
  component: AdminButton,
  argTypes: {
    onClick: {},
    type: {
      control: { type: "select" },
      options: ["submit", "button", "reset"],
    },
    variation: {
      control: { type: "select" },
      options: ["primary", "danger", "secondary", "white"],
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
