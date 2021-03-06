import SltAdminFormUpload from "../../src/components/AdminFormUpload/AdminFormUpload.vue";

export default {
  title: "Admin/Forms/Upload",
  component: SltAdminFormUpload,
};

const Template = (args) => ({
  components: { SltAdminFormUpload },
  setup() {
    return {
      args,
    };
  },
  template: `<div class="max-w-lg"><slt-admin-form-upload v-bind="args" /></div>`,
});

export const Default = Template.bind({});

Default.args = {
  inputId: "form_upload",
  label: "Upload your file",
};
