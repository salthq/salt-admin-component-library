import SltAdminFormTextArea from "../../components/AdminFormTextArea/AdminFormTextArea.vue";

export default {
  title: "Admin/Forms/Text Area",
  component: SltAdminFormTextArea,
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
    rows: {
      control: {
        type: "number",
      },
      defaultValue: 10,
    },
  },
};

const Template = (args) => ({
  components: { SltAdminFormTextArea },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-text-area v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
  inputId: "example_textarea",
  label: "About",
  type: "text",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  inputId: "example_textarea",
  readonly: true,
  label: "About",
  type: "text",
};

export const Required = Template.bind({});
Required.args = {
  inputId: "example_textarea",
  required: true,
  label: "About",
  type: "text",
};

export const WithInfo = Template.bind({});
WithInfo.args = {
  inputId: "example_textarea",
  info: "Tell us about yourself",
  label: "About",
  type: "text",
};

export const WithCharacterLimit = (args) => ({
  components: { SltAdminFormTextArea },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-text-area maxlength="100" v-bind="args" />`,
});

WithCharacterLimit.args = {
  inputId: "example_textarea",
  label: "About",
  value:
    "Maecenas non velit vitae dolor molestie tempor. In felis risus, sodales vitae neque eget, dignissim.",
};
