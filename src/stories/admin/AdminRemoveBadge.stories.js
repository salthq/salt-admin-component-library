import SltAdminRemoveBadge from "../../components/AdminRemoveBadge/AdminRemoveBadge.vue";

export default {
  title: "Admin/Badges/Remove Badge",
  component: SltAdminRemoveBadge,
  argTypes: {
    onClick: {},
    label: {
      control: {
        type: "text",
      },
      defaultValue: "ID:",
    },
    text: {
      control: {
        type: "text",
      },
      defaultValue: "56",
    },
  },
};

export const WithLabel = (args) => ({
  components: { SltAdminRemoveBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-remove-badge v-bind="args">
    <template #label>{{args.label}}</template>
    <template #text>{{args.text}}</template>
  </slt-admin-remove-badge>`,
});

WithLabel.args = {
  label: "ID",
  text: "56",
};

export const WithoutLabel = (args) => ({
  components: { SltAdminRemoveBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-remove-badge v-bind="args">
    <template #text>{{args.text}}</template>
  </slt-admin-remove-badge>`,
});

WithoutLabel.args = {
  text: "56",
};

WithoutLabel.parameters = { controls: { exclude: ["label"] } };
