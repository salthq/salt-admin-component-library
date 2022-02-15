import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminBadge from "../../src/components/AdminBadge/AdminBadge.vue";

describe("AdminBadge.vue", () => {
  it("displays the value of text added in the text slot", () => {
    const text = "Test text";
    const wrapper = mount(AdminBadge, {
      slots: {
        text: () => text,
      },
    });

    assert.include(wrapper.html(), text);
  });

  it("displays the value of the label added in the label slot", () => {
    const label = "Test label";
    const wrapper = mount(AdminBadge, {
      slots: {
        label: () => label,
      },
    });

    assert.include(wrapper.html(), label);
  });

  it("has the 'admin-badge-default' class when variation is default", () => {
    const wrapper = mount(AdminBadge, {
      props: { variation: "default" },
    });

    assert.isTrue(wrapper.classes("admin-badge-default"));
  });

  it("has the 'admin-badge-success' class when variation is success", () => {
    const wrapper = mount(AdminBadge, {
      props: { variation: "success" },
    });

    assert.isTrue(wrapper.classes("admin-badge-success"));
  });

  it("has the 'admin-badge-warning' class when variation is warning", () => {
    const wrapper = mount(AdminBadge, {
      props: { variation: "warning" },
    });

    assert.isTrue(wrapper.classes("admin-badge-warning"));
  });

  it("has the 'admin-badge-failure' class when variation is failure", () => {
    const wrapper = mount(AdminBadge, {
      props: { variation: "failure" },
    });

    assert.isTrue(wrapper.classes("admin-badge-failure"));
  });
});
