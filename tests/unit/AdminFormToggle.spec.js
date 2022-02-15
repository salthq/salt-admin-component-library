import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";
import AdminFormToggle from "@/components/AdminFormToggle/AdminFormToggle.vue";

const inputID = "toggle_test";
const label = "Toggle Label";
const info = "Some text about toggling";

const wrapper = shallowMount(AdminFormToggle, {
  props: { inputID, label, info },
});

describe("AdminFormToggle.vue", () => {
  it("displays a label", () => {
    assert.include(wrapper.text(), label);
  });

  it("displays info if props.info has been passed", () => {
    assert.include(wrapper.text(), info);
  });

  it("changes the 'checked' data property value when clicked", () => {
    const toggle = wrapper.find(".form-toggle");
    toggle.trigger("click");

    assert.isTrue(wrapper.vm.checked);
  });

  it("emits an 'input' value when clicked", () => {
    const toggle = wrapper.find(".form-toggle");
    toggle.trigger("click");

    assert.isOk(wrapper.emitted("input"));
  });
});
