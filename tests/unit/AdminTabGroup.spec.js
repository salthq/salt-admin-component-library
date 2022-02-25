import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminTabGroup from "@/components/AdminTabGroup/AdminTabGroup.vue";

const wrapper = mount(AdminTabGroup, {
  slots: {
    default: () => "<h1 id='tab-cotent'>Tab Content</h1>",
  },
});

describe("AdminTabGroup", () => {
  it("displays anything added in the default slot", () => {
    const defaultSlotContent = wrapper.find("#tab-content");

    assert.exists(defaultSlotContent);
  });
});
