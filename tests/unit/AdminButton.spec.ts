import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminButton from "../../src/components/AdminButton/AdminButton.vue";

const label = "Test text";

describe("AdminButton.vue", () => {
  it("displays the value of the label prop", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label },
    });

    assert.include(wrapper.text(), label);
  });

  it("has the 'admin-button-primary' class when variation is primary", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label, variation: "primary" },
    });

    const button = wrapper.find("button");

    assert.isTrue(button.classes("admin-button-primary"));
  });

  it("has the 'admin-button-secondary' class when variation is secondary", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label, variation: "secondary" },
    });

    const button = wrapper.find("button");

    assert.isTrue(button.classes("admin-button-secondary"));
  });

  it("has the 'admin-button-white' class when variation is white", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label, variation: "white" },
    });

    const button = wrapper.find("button");

    assert.isTrue(button.classes("admin-button-white"));
  });

  it("has the 'admin-button-disabled' class and 'disabled' attribute when props.disabled is true", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label, disabled: true },
    });

    const button = wrapper.find("button");

    assert.isTrue(button.classes("admin-button-disabled"));
  });

  it("emits a 'clicked' event when clicked", () => {
    const wrapper = shallowMount(AdminButton, {
      props: { label },
    });

    const button = wrapper.find("button");
    button.trigger("click");

    assert.isOk(wrapper.emitted("click"));
  });
});
