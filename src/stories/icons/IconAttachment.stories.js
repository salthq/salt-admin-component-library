import SltIconAttachment from "../../components/IconAttachment/IconAttachment.vue";
import IconArgTypes from "./IconArgTypes";

export default {
  title: "Icons/Attachment",
  component: SltIconAttachment,
  argTypes: IconArgTypes,
};

export const Attachment = (args) => ({
  components: { SltIconAttachment },
  setup() {
    return { args };
  },
  template: "<slt-icon-attachment v-bind='args' />",
});
