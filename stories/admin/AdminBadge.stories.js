import SltAdminBadge from "../../src/components/AdminBadge/AdminBadge.vue";

export default {
  title: "Admin/Badges/Badge",
  component: SltAdminBadge,
  argTypes: {
    label: {
      control: {
        type: "text",
      },
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

export const WithLabel = (args) => ({
  components: { SltAdminBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-badge v-bind="args">
    <template #label>{{args.label}}</template>
    <template #text>{{args.text}}</template>
  </slt-admin-badge>`,
});

WithLabel.args = {
  label: "ID",
  text: "56",
  variation: "default",
};

export const WithoutLabel = (args) => ({
  components: { SltAdminBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-badge v-bind="args">
    <template #text>{{args.text}}</template>
  </slt-admin-badge>`,
});

WithoutLabel.args = {
  text: "56",
  variation: "default",
};

WithoutLabel.parameters = { controls: { exclude: ["label"] } };
