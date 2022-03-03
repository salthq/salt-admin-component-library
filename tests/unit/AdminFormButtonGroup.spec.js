import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormButtonGroup from "@/components/AdminFormButtonGroup/AdminFormButtonGroup";

const inputId = "test-button-group";
const label = "Test button group";
const options = [
  {
    label: "Days",
    value: "days",
  },
  {
    label: "Months",
    value: "months",
  },
  {
    label: "Years",
    value: "years",
  },
];

describe("AdminFormButtonGroup.vue", () => {
  it("displays the value of the label", () => {
    const wrapper = shallowMount(AdminFormButtonGroup, {
      props: { inputId, label, options },
    });

    assert.include(wrapper.text(), label);
  });

  it("displays the value of info if passed", () => {
    const info = "Select a date type";
    const wrapper = shallowMount(AdminFormButtonGroup, {
      props: { inputId, label, options, info },
    });

    assert.include(wrapper.text(), info);
  });

  it("has a button for each option", () => {
    const wrapper = shallowMount(AdminFormButtonGroup, {
      props: { inputId, label, options },
    });

    const buttons = wrapper.findAll("button");

    assert.equal(buttons.length, options.length);
  });

  it("emits the selected option when clicked", async () => {
    const wrapper = shallowMount(AdminFormButtonGroup, {
      props: { inputId, label, options },
    });

    const button = wrapper.find("button");
    await button.trigger("click");

    assert.exists(wrapper.emitted().selected);
    assert.equal(wrapper.emitted().selected[0].shift().value, options[0].value);
  });
});
