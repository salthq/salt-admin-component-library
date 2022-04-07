import SltAdminStatsCard from "../../src/components/AdminStatsCard/AdminStatsCard.vue";

export default {
  title: "Admin/Stats Card",
  component: SltAdminStatsCard,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    loading: {
      control: {
        type: "boolean",
      },
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { SltAdminStatsCard },
  setup() {
    return { args };
  },
  template: `<div class="max-w-xs"><slt-admin-stats-card v-bind="args" /></div>`,
});

export const Default = Template.bind({});
Default.args = {
  label: "Users",
  value: 100,
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Users",
  loading: true,
  value: 100,
};
