import { SltAdminAlertWrapper } from "./components/AdminAlertWrapper";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SltAdminAlertWrapper: typeof SltAdminAlertWrapper;
  }
}
