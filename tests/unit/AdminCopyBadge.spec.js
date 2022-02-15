import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminCopyBadge from "../../src/components/AdminCopyBadge/AdminCopyBadge.vue";

const text = "Test text";

describe("AdminCopyBadge.vue", () => {
  it("displays the value of text added in the text slot", () => {
    const wrapper = mount(AdminCopyBadge, {
      props: {
        text: text,
      },
    });

    assert.include(wrapper.html(), text);
  });

  it("displays the value of the label added in the label slot", () => {
    const label = "Test label";
    const wrapper = mount(AdminCopyBadge, {
      props: {
        text: text,
      },
      slots: {
        label: () => label,
      },
    });

    assert.include(wrapper.html(), label);
  });

  it("emits 'copy' with the value of the text when clicked", () => {
    const wrapper = mount(AdminCopyBadge, {
      props: {
        text: text,
      },
    });

    const copyButton = wrapper.find("button");
    copyButton.trigger("click");

    assert.isOk(wrapper.emitted("copyText", text));
  });
});
