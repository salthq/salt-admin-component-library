import SltAdminFormDatePicker from "../../src/components/AdminFormDatePicker/AdminFormDatePicker.vue";

export default {
  title: "Admin/Forms/Date Picker",
  component: { SltAdminFormDatePicker },
  argTypes: {
    futureDatesAllowed: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    label: {
      control: { type: "text" },
    },
    inputId: {
      control: { type: "text" },
    },
    mode: {
      control: { type: "select" },
      options: ["date", "datetime"],
    },
    pastDatesAllowed: {
      control: { type: "boolean" },
      defaultValue: true,
    },
    required: {
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const Template = (args) => ({
  components: { SltAdminFormDatePicker },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-date-picker v-bind="args" />`,
});

export const Date = Template.bind({});
Date.args = {
  inputId: "example-date-picker",
  label: "Pick a date",
  mode: "date",
};

export const DateTime = Template.bind({});
DateTime.args = {
  inputId: "example-date-picker",
  label: "Pick a date & time",
  mode: "datetime",
};

export const WithRange = Template.bind({});
WithRange.args = {
  inputId: "example-date-picker",
  label: "Pick a range of dates",
  mode: "date",
  range: true,
};
