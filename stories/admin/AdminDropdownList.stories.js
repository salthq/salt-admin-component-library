import SltAdminDropdownList from "../../src/components/AdminDropdownList/AdminDropdownList.vue";

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
  itemList: [
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
};
