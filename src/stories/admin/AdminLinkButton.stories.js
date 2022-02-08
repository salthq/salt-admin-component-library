import SltAdminLinkButton from "../../components/AdminLinkButton/AdminLinkButton.vue";

export default {
  title: "Admin/Link Button",
  components: { SltAdminLinkButton },
  argTypes: {
    variation: {
      control: { type: "select" },
      options: ["primary", "danger", "secondary", "white"],
      defaultValue: "primary",
    },
  },
};

export const Default = (args) => ({
  components: { SltAdminLinkButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-link-button v-bind="args" />`,
});

Default.args = {
  text: "Link",
  link: "#",
  variation: "primary",
};
