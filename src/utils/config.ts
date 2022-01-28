import { App } from "vue";
export let VueInstance: App;

export const setVueInstance = (Vue: App): void => {
  VueInstance = Vue;
};
