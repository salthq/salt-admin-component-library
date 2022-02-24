import SltAdminFormSelect from "../../src/components/AdminFormSelect/AdminFormSelect.vue";

export default {
  title: "Admin/Forms/Select",
  component: SltAdminFormSelect,
};

const Template = (args) => ({
  components: { SltAdminFormSelect },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-select v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  inputId: "example_select",
  options: [
    {
      id: "document",
      name: "Document",
    },
    {
      id: "file",
      name: "File",
    },
    {
      id: "link",
      name: "Link",
    },
    {
      id: "presentation",
      name: "Presentation",
    },
    {
      id: "spreadsheet",
      name: "Spreadsheet",
    },
    {
      id: "folder",
      name: "Folder",
    },
  ],
  label: "Select an attachment type",
};

export const WithError = Template.bind({});
WithError.args = {
  error: "An item must be selected",
  inputId: "example_select",
  options: [
    {
      id: "document",
      name: "Document",
    },
    {
      id: "file",
      name: "File",
    },
  ],
  label: "Select an attachment type",
  required: true,
};
