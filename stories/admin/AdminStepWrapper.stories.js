import SltAdminStepWrapper from "../../src/components/AdminStepWrapper/AdminStepWrapper.vue";
import SltAdminStepItem from "../../src/components/AdminStepItem/AdminStepItem.vue";

export default {
  title: "Admin/Steps/Wrapper",
  component: SltAdminStepWrapper,
};

const Template = (args) => ({
  components: { SltAdminStepWrapper, SltAdminStepItem },
  setup() {
    return { args };
  },

  template: `<slt-admin-step-wrapper>
    <slt-admin-step-item label="First step" step-number="1" step-status="completed" url="#" />
    <slt-admin-step-item label="Second step" step-number="2" step-status="current" url="#"/>
    <slt-admin-step-item label="Third step" step-number="3" step-status="upcoming" url="#"/>
  </slt-admin-step-wrapper>`,
});

export const Default = Template.bind({});
