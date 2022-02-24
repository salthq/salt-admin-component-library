import SltAdminTabButton from "../../src/components/AdminTabButton/AdminTabButton.vue";

export default {
  title: "Admin/Tabs/Button",
  component: SltAdminTabButton,
};

const Template = (args) => ({
  components: { SltAdminTabButton },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-tab-button v-bind="args" />`,
});

export const Active = Template.bind({});
Active.args = {
  label: "Active tab",
  tab: "tab-button",
  active: true,
};

export const Inactive = Template.bind({});
Inactive.args = {
  label: "Inactive tab",
  tab: "tab-button",
  active: false,
};
