import SltAdminFormSelect from "../../components/AdminFormSelect/AdminFormSelect.vue";

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
      value: "document",
      label: "Document",
    },
    {
      value: "file",
      label: "File",
    },
    {
      value: "link",
      label: "Link",
    },
    {
      value: "presentation",
      label: "Presentation",
    },
    {
      value: "spreadsheet",
      label: "Spreadsheet",
    },
    {
      value: "folder",
      label: "Folder",
    },
  ],
  label: "Select an attachment type",
};
