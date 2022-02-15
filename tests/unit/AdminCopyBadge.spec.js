import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminCopyBadge from "../../src/components/AdminCopyBadge/AdminCopyBadge.vue";

describe("AdminCopyBadge.vue", () => {
  it("displays the value of text added in the text slot", () => {
    const text = "Test text";
    const wrapper = mount(AdminCopyBadge, {
      slots: {
        text: () => text,
      },
    });

    assert.include(wrapper.html(), text);
  });

  it("displays the value of the label added in the label slot", () => {
    const label = "Test label";
    const wrapper = mount(AdminCopyBadge, {
      slots: {
        label: () => label,
      },
    });

    assert.include(wrapper.html(), label);
  });

  it("emits 'copy' with the value of the text when clicked", () => {
    const text = "copy me";

    const wrapper = mount(AdminCopyBadge, {
      slots: {
        text: () => text,
      },
    });

    const copyButton = wrapper.find("button");
    copyButton.trigger("click");

    assert.isOk(wrapper.emitted("copyText"));
  });
});
