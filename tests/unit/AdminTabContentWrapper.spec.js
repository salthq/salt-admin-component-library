import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminTabContentWrapper from "@/components/AdminTabContentWrapper/AdminTabContentWrapper.vue";

const wrapper = mount(AdminTabContentWrapper, {
  props: {
    id: "test-tab",
  },
  slots: {
    default: () => "<h1 id='tab-content'>Tab Content</h1>",
  },
});

describe("AdminTabContentWrapper", () => {
  it("displays anything added in the default slot", () => {
    const defaultSlotContent = wrapper.find("#tab-content");

    assert.exists(defaultSlotContent);
  });
});
