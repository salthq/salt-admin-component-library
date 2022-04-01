import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminStepWrapper from "@/components/AdminStepWrapper/AdminStepWrapper";

describe("AdminStepWrapper", () => {
  const defaultSlotContent = "Steps";

  const wrapper = mount(AdminStepWrapper, {
    slots: {
      default: () => defaultSlotContent,
    },
  });

  it("Displays anything added in the default slot", () => {
    assert.include(wrapper.html(), defaultSlotContent);
  });
});
