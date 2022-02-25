import SltAdminTabButton from "../../src/components/AdminTabButton/AdminTabButton.vue";
import SltAdminTabGroup from "../../src/components/AdminTabGroup/AdminTabGroup.vue";

export default {
  title: "Admin/Tabs/Group",
  component: SltAdminTabGroup,
};

const Template = (args) => ({
  components: { SltAdminTabGroup, SltAdminTabButton },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-tab-group>
    <slt-admin-tab-button label="Tab 1" tab="tab-1" />
    <slt-admin-tab-button label="Tab 2" tab="tab-2" />
  </slt-admin-tab-group>`,
});

export const Default = Template.bind({});
