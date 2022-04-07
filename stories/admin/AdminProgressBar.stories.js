import SltAdminProgressBar from "../../src/components/AdminProgressBar/AdminProgressBar.vue";

export default {
  title: "Admin/Progress Bar",
  component: SltAdminProgressBar,
  argTypes: {
    current: {
      control: {
        type: "number",
      },
      defaultValue: 0,
    },
    message: {
      control: {
        type: "text",
      },
    },
    total: {
      control: {
        type: "number",
      },
      defaultValue: 100,
    },
  },
};

const Template = (args) => ({
  components: { SltAdminProgressBar },
  setup() {
    return { args };
  },
  template: `<slt-admin-progress-bar v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  current: 0,
  message: "Importing...",
  total: 100,
};

export const InProgress = Template.bind({});
InProgress.args = {
  current: Math.floor(Math.random() * 99),
  message: "Importing...",
  total: 100,
};

export const Complete = Template.bind({});
Complete.args = {
  current: 100,
  message: "Importing...",
  total: 100,
};
