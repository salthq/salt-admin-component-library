import SltAdminTable from "../../src/components/AdminTable/AdminTable.vue";
import SltAdminTableRow from "../../src/components/AdminTableRow/AdminTableRow.vue";
import SltAdminTableCell from "../../src/components/AdminTableCell/AdminTableCell.vue";

export default {
  title: "Admin/Table",
  component: SltAdminTable,
};

export const WithoutPagination = (args) => ({
  components: { SltAdminTable, SltAdminTableRow, SltAdminTableCell },
  setup() {
    return { args };
  },
  template: `<slt-admin-table v-bind="args">
    <template #rows>
      <slt-admin-table-row 
        v-for="(row, index) in args.tableData" 
        :key="row.id" 
        :index="index">
        <slt-admin-table-cell>{{row.id}}</slt-admin-table-cell>
        <slt-admin-table-cell>{{row.email}}</slt-admin-table-cell>
        <slt-admin-table-cell>{{row.name}}</slt-admin-table-cell>

      </slt-admin-table-row>
    </template>
  </slt-admin-table>`,
});

WithoutPagination.args = {
  tableData: [
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
  columns: [
    {
      label: "Id",
      sort: "id",
    },
    {
      label: "Email",
      sort: "sort",
    },
    {
      label: "Name",
      sort: "name",
    },
  ],
};
