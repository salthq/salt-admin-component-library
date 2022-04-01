import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminTabContentWrapper from "@/components/AdminTabContentWrapper/AdminTabContentWrapper.vue";

describe("AdminTabContentWrapper", () => {
  const defaultSlotContent = "Tab content";

  const wrapper = mount(AdminTabContentWrapper, {
    props: {
      id: "test-tab",
    },
    slots: {
      default: () => defaultSlotContent,
    },
  });

  it("displays anything added in the default slot", () => {
    assert.include(wrapper.html(), defaultSlotContent);
  });
});
