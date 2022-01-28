import AdminButton from "../components/AdminButton";

export default {
  title: "Admin Button",
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

const Template = (args) => ({
  components: { AdminButton },
  setup() {
    return { args };
  },
  template: '<admin-button v-bind="args" />',
});

export const Default = Template.bind({});
