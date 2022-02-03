import SltAdminDropdownList from "../../components/AdminDropdownList/AdminDropdownList.vue";

export default {
  title: "Admin/Dropdowns/List",
  component: SltAdminDropdownList,
};

const Template = (args) => ({
  components: { SltAdminDropdownList },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-dropdown-list v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  itemIdentifier: "value",
  itemLabel: "label",
  itemList: [
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
  label: ["label", "value"],
};
