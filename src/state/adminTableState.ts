import { reactive } from "vue";

type SelectedUsersType = Array<number>;
type AllRowIdsType = Array<number>;
type SelectedRowsType = Array<number>;

export default reactive({
  activeSortColumn: "id",
  activeSortState: "asc",
  activeQuery: "",
  adminTableData: {},
  allUsersSelected: false,
  selectedUsers: [] as SelectedUsersType,
  allRowsSelected: false,
  allRowIDs: [] as AllRowIdsType,
  selectedRows: [] as SelectedRowsType,
  tablePerPageOption: 10,
});
