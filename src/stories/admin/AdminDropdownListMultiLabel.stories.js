import SltAdminDropdownListMultiLabel from "../../components/AdminDropdownListMultiLabel/AdminDropdownListMultiLabel.vue";

export default {
  title: "Admin/Dropdowns/Multi Label List",
  component: SltAdminDropdownListMultiLabel,
};

const Template = (args) => ({
  components: { SltAdminDropdownListMultiLabel },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-dropdown-list-multi-label v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
  itemIdentifier: "value",
  itemLabel: "label",
  itemList: [
    {
      id: 1,
      email: "josefina_singleton@test.gm",
      name: "Josefina Singleton",
    },
    {
      id: 2,
      email: "odessa_chaney@test.soy",
      name: "Odessa Chaney",
    },
    {
      id: 3,
      email: "petra_french@test.montblanc",
      name: "Petra French",
    },
    {
      id: 4,
      email: "gilda_george@test.info",
      name: "Gilda George",
    },
    {
      id: 5,
      email: "espinoza_hutchinson@test.sncf",
      name: "Espinoza Hutchinson",
    },
  ],
  label: ["name", "email"],
};
