import { reactive } from "vue";

type SelectedUsersType = Array<number>;
type AllRowsIdsType = Array<number>;
type SelectedRowsType = Array<number>;

export default reactive({
  activeSortColumn: "id",
  activeSortState: "asc",
  activeQuery: "",
  adminTableData: {},
  allUsersSelected: false,
  selectedUsers: [] as SelectedUsersType,
  allRowsSelected: false,
  allRowsIDs: [] as AllRowsIdsType,
  selectedRows: [] as SelectedRowsType,
  tablePerPageOption: 10,
});
