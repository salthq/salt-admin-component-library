import SltAdminFormButtonGroup from "../../src/components/AdminFormButtonGroup/AdminFormButtonGroup.vue";

export default {
  title: "Admin/Forms/Button Group",
  component: { SltAdminFormButtonGroup },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    info: {
      control: { type: "text" },
    },
  },
};

const Template = (args) => ({
  components: { SltAdminFormButtonGroup },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-button-group v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  inputId: "example-button-group",
  label: "Date type",
  options: [
    {
      label: "Days",
      value: "days",
    },
    {
      label: "Months",
      value: "months",
    },
    {
      label: "Years",
      value: "years",
    },
  ],
};
