import SltAdminCopyBadge from "../../components/AdminCopyBadge/AdminCopyBadge.vue";

export default {
  title: "Admin/Copy Badge",
  component: SltAdminCopyBadge,
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
  components: { SltAdminCopyBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-copy-badge v-bind="args">
    <template #label>{{args.label}}</template>
    <template #text>{{args.text}}</template>
  </slt-admin-copy-badge>`,
});

WithLabel.args = {
  label: "ID",
  text: "56",
};

export const WithoutLabel = (args) => ({
  components: { SltAdminCopyBadge },
  setup() {
    return { args };
  },
  template: `<slt-admin-copy-badge v-bind="args">
    <template #text>{{args.text}}</template>
  </slt-admin-copy-badge>`,
});

WithoutLabel.args = {
  text: "56",
};

WithoutLabel.parameters = { controls: { exclude: ["label"] } };
