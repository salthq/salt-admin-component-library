import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminProgressBar from "@/components/AdminProgressBar/AdminProgressBar.vue";

describe("AdminProgressBar.vue", () => {
  it("displays the message passed as a prop", () => {
    const message = "Progress message";
    const wrapper = shallowMount(AdminProgressBar, {
      props: { message: message, total: 100 },
    });

    assert.include(wrapper.text(), message);
  });

  it("Displays the correct percentage", () => {
    const current = 20;

    const wrapper = shallowMount(AdminProgressBar, {
      props: { current: current, total: 100 },
    });

    assert.include(wrapper.text(), "20%");
  });
});
