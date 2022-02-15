import SltAdminFormToggle from "../../src/components/AdminFormToggle/AdminFormToggle.vue";

export default {
  title: "Admin/Forms/Toggle",
  component: SltAdminFormToggle,
  argTypes: {
    readonly: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    value: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { SltAdminFormToggle },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-toggle v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  inputId: "example_toggle",
  label: "Toggle",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  inputId: "example_toggle",
  readonly: true,
  label: "Toggle",
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  inputId: "example_toggle",
  label: "Toggle",
  info: "Some additional info",
};
