import SltAdminBreadcrumbs from "../../src/components/AdminBreadcrumbs/AdminBreadcrumbs.vue";

export default {
  title: "Admin/Breadcrumbs",
  components: { SltAdminBreadcrumbs },
};

export const Default = (args) => ({
  components: { SltAdminBreadcrumbs },
  setup() {
    return { args };
  },
  template: `<slt-admin-breadcrumbs v-bind="args" />`,
});

Default.args = {
  breadcrumbs: [
    {
      url: "/admin/link",
      title: "Link 1",
    },
    {
      url: "/admin/link/2",
      title: "Link 2",
    },
    {
      url: "/admin/link/3",
      title: "Current",
    },
  ],
};
