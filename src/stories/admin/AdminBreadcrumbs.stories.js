import SltAdminBreadcrumbs from "../../components/AdminBreadcrumbs/AdminBreadcrumbs.vue";

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

export const CustomLink = (args) => ({
  components: { SltAdminBreadcrumbs },
  setup() {
    return { args };
  },
  template: `<slt-admin-breadcrumbs v-bind="args">
    <template v-slot:link="slotProps">
      <a
      class="hover:underline"
      :class="{ 'text-primary-700': slotProps.index === slotProps.breadcrumbs.length - 1 }"
      :href="slotProps.breadcrumb.url"
      >{{ slotProps.breadcrumb.title }}</a>
    </template>
  </slt-admin-breadcrumbs>`,
});

CustomLink.args = {
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
