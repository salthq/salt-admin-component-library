import SltAdminStepItem from "../../src/components/AdminStepItem/AdminStepItem.vue";

export default {
  title: "Admin/Steps/Item",
  component: SltAdminStepItem,
  argTypes: {
    stepStatus: {
      control: {
        type: "select",
      },
      options: ["completed", "current", "upcoming"],
      defaultValue: "upcoming",
    },
  },
};

const Template = (args) => ({
  components: { SltAdminStepItem },
  setup() {
    return { args };
  },
  template: `<div class="max-w-sm"><slt-admin-step-item v-bind="args" /></div>`,
});

export const Default = Template.bind({});

Default.args = {
  label: "Step Example",
  stepNumber: "1",
  url: "#",
};
