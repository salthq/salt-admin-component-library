import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormWrapper from "@/components/AdminFormWrapper/AdminFormWrapper.vue";

const wrapper = mount(AdminFormWrapper, {
  slots: {
    fields: () => "<h1 id='fields'>Fields</h1>",
    heading: () => "<h1 id='heading'>Heading</h1>",
    actions: () => "<button id='actions'>Button</button>",
  },
});

describe("AdminFormWrapper.vue", () => {
  it("displays anything added in the fields slot", () => {
    const contentSlotContent = wrapper.find("#fields");

    assert.exists(contentSlotContent);
  });

  it("displays content added in the title slot", function () {
    const titleSlotContent = wrapper.find("#heading");

    assert.exists(titleSlotContent);
  });

  it("displays content added in the actions slot", function () {
    const actionSlotContent = wrapper.find("#actions");

    assert.exists(actionSlotContent);
  });
});
