import SltAdminFormInput from "../../src/components/AdminFormInput/AdminFormInput.vue";

export default {
  title: "Admin/Forms/Input",
  component: SltAdminFormInput,
  argTypes: {
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    readonly: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    required: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
    type: {
      control: {
        type: "select",
      },
      options: ["date", "email", "number", "text", "tel", "url"],
    },
  },
};

const Template = (args) => ({
  components: { SltAdminFormInput },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-input v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
  inputId: "example_input",
  label: "Name",
  type: "text",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  inputId: "example_input",
  readonly: true,
  label: "Name",
  type: "text",
};

export const Required = Template.bind({});
Required.args = {
  inputId: "example_input",
  required: true,
  label: "Name",
  type: "text",
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  inputId: "example_input",
  info: "Enter your first and last names",
  label: "Name",
  type: "text",
};
