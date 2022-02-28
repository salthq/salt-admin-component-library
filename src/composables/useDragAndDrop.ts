import { computed, ref } from "vue";
import state from "@/state/adminFormUploadState";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const dragAndDropFileUpload = (
  emit: (event: "input", file: File | null) => void
) => {
  const isFileDropping = ref(false);

  const fileDropClasses = computed(() => ({
    "border-dashed border-2 border-green-300 bg-green-100":
      isFileDropping.value,
    "border-dashed border-2 border-gray-300": !isFileDropping.value,
  }));

  const dragover = (event: MouseEvent) => {
    event.preventDefault();
    isFileDropping.value = true;
  };

  const drop = (event: any) => {
    event.preventDefault();

    state.file = event.dataTransfer.files[0];
    emit("input", state.file);

    isFileDropping.value = false;
  };

  return {
    dragover,
    drop,
    fileDropClasses,
  };
};
