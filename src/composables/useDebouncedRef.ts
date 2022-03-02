import { ref, customRef } from "vue";

const debounce = (
  fn: { (value: any): void; (arg0: any): void },
  delay = 0,
  immediate = false
) => {
  let timeout: number | undefined;
  return (...args: any) => {
    if (immediate && !timeout) fn(args);
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      fn(args);
    }, delay);
  };
};

const useDebouncedRef = (
  initialValue: any,
  delay: number | undefined,
  immediate: boolean | undefined
) => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce(
      (value: any) => {
        state.value = value;
        trigger();
      },
      delay,
      immediate
    ),
  }));
  return debouncedRef;
};

export default useDebouncedRef;
