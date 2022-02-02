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

export const CustomLink = (args) => ({
  components: { SltAdminLinkButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-link-button v-bind="args">
    <template v-slot:link="slotProps">
        <a
            tag="button"
            :href="route ? $route(route) : link"
            :method="method"
            :class="slotProps.classes"
        >
            {{ slotProps.text }}
        </a> 
    </template>
  </slt-admin-link-button>`,
});

CustomLink.args = {
  text: "Custom link",
  link: "#",
  variation: "secondary",
};
