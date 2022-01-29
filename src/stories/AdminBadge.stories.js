import SltAdminBadge from "../components/AdminBadge/AdminBadge.vue";

export default {
  title: "Admin Badge",
  component: SltAdminBadge,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
      defaultValue: "ID",
    },
    text: {
      control: {
        type: "text",
      },
      defaultValue: "56",
    },
    variation: {
      control: { type: "select" },
      options: ["default", "success", "warning", "failure"],
    },
  },
};

const Template = (args) => ({
  components: { SltAdminBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-badge v-bind="args">
        <template #label>{{args.label}}</template>
        <template #text>{{args.text}}</template>
    </slt-admin-badge>`,
});

export const Default = Template.bind();
Default.args = {
  label: "ID",
  text: "56",
  variation: "default",
};
