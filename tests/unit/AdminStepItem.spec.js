import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminStepItem from "@/components/AdminStepItem/AdminStepItem.vue";

const stepNumber = "01";
const label = "Some step";

const wrapper = mount(AdminStepItem, {
  props: { stepNumber: stepNumber, label: label },
});

describe("AdminStepItem.vue", () => {
  it("Displays the step number", () => {
    assert.include(wrapper.text(), stepNumber);
  });
  it("displays a label", () => {
    assert.include(wrapper.text(), label);
  });
});
