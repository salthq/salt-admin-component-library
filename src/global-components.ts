import SltAdminAlertWrapper from "@/components/AdminAlertWrapper/AdminAlertWrapper.vue";
import SltAdminBadge from "@/components/AdminBadge/AdminBadge.vue";
import SltAdminBreadcrumbs from "@/components/AdminBreadcrumbs/AdminBreadcrumbs.vue";
import SltAdminButton from "@/components/AdminButton/AdminButton.vue";
import SltAdminFormHeading from "@/components/AdminFormHeading/AdminFormHeading.vue";
import SltAdminFormInput from "@/components/AdminFormInput/AdminFormInput.vue";
import SltAdminFormSelect from "@/components/AdminFormSelect/AdminFormSelect.vue";
import SltAdminFormTextArea from "@/components/AdminFormTextArea/AdminFormTextArea.vue";
import SltAdminFormToggle from "@/components/AdminFormToggle/AdminFormToggle.vue";
import SltAdminFormWrapper from "@/components/AdminFormWrapper/AdminFormWrapper.vue";
import SltAdminLinkButton from "@/components/AdminLinkButton/AdminLinkButton.vue";
import SltAdminTable from "@/components/AdminTable/AdminTable.vue";
import SltAdminTableCell from "@/components/AdminTableCell/AdminTableCell.vue";
import SltAdminTableRow from "@/components/AdminTableRow/AdminTableRow.vue";
import SltIconArchive from "@/components/IconArchive/IconArchive.vue";
import SltIconDashboard from "@/components/IconDashboard/IconDashboard.vue";
import SltIconEdit from "@/components/IconEdit/IconEdit.vue";
import SltIconTrash from "@/components/IconTrash/IconTrash.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SltAdminAlertWrapper: typeof SltAdminAlertWrapper;
    SltAdminBadge: typeof SltAdminBadge;
    SltAdminBreadcrumbs: typeof SltAdminBreadcrumbs;
    SltAdminButton: typeof SltAdminButton;
    SltAdminFormHeading: typeof SltAdminFormHeading;
    SltAdminFormInput: typeof SltAdminFormInput;
    SltAdminFormSelect: typeof SltAdminFormSelect;
    SltAdminFormTextArea: typeof SltAdminFormTextArea;
    SltAdminFormToggle: typeof SltAdminFormToggle;
    SltAdminFormWrapper: typeof SltAdminFormWrapper;
    SltAdminLinkButton: typeof SltAdminLinkButton;
    SltAdminTable: typeof SltAdminTable;
    SltAdminTableCell: typeof SltAdminTableCell;
    SltAdminTableRow: typeof SltAdminTableRow;
    SltIconArchive: typeof SltIconArchive;
    SltIconDashboard: typeof SltIconDashboard;
    SltIconEdit: typeof SltIconEdit;
    SltIconTrash: typeof SltIconTrash;
  }
}
