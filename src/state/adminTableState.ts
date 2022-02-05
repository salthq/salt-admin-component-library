import { reactive } from "vue";

export default reactive({
  activeSortColumn: "id",
  activeSortState: "asc",
  activeQuery: "",
  adminTableData: {},
  allUsersSelected: false,
  selectedUsers: [],
  allRowsSelected: false,
  allRowsIDs: [],
  selectedRows: [],
  tablePerPageOption: 10,
});
