import { reactive } from "vue";

// Types
import { FileUploadState } from "../types/index";

const state: FileUploadState = reactive({
  file: null,
  fileInput: null,
});

export default state;
