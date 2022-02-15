import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormWrapper from "@/components/AdminFormWrapper/AdminFormWrapper.vue";

const wrapper = mount(AdminFormWrapper, {
  slots: {
    content: () => "<h1 id='content'>Content</h1>",
    header: () => "<h1 id='header'>Header</h1>",
    actions: () => "<button id='actions'>Button</button>",
  },
});

describe("AdminFormWrapper.vue", () => {
  it("displays content added in the content slot", () => {
    const contentSlotContent = wrapper.find("#content");

    assert.exists(contentSlotContent);
  });

  it("displays content added in the title slot", function () {
    const titleSlotContent = wrapper.find("#header");

    assert.exists(titleSlotContent);
  });

  it("displays content added in the actions slot", function () {
    const actionSlotContent = wrapper.find("#actions");

    assert.exists(actionSlotContent);
  });
});
