import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminCardWrapper from "../../src/components/AdminCardWrapper/AdminCardWrapper.vue";

const wrapper = mount(AdminCardWrapper, {
  slots: {
    default: () => "<h1 id='default'>Content</h1>",
    header: () => "<h1 id='title'>Title</h1>",
    actions: () => "<button id='action'>Button</button>",
  },
});

describe("AdminCardWrapper.vue", () => {
  it("displays content added in the default slot", function () {
    const defaultSlotContent = wrapper.find("#default");

    assert.exists(defaultSlotContent);
  });

  it("displays content added in the title slot", function () {
    const titleSlotContent = wrapper.find("#title");

    assert.exists(titleSlotContent);
  });

  it("displays content added in the actions slot", function () {
    const actionSlotContent = wrapper.find("#action");

    assert.exists(actionSlotContent);
  });
});
