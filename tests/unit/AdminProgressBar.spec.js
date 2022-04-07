import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminProgressBar from "@/components/AdminProgressBar/AdminProgressBar.vue";

const current = 20;
const message = "Progress message";
const total = 100;

describe("AdminProgressBar.vue", () => {
  it("displays the correct percentage", () => {
    const wrapper = shallowMount(AdminProgressBar, {
      props: { current: current, message: message, total: total },
    });

    const percentage = Math.round((current / total) * 100);
    assert.include(wrapper.text(), `${percentage}%`);
  });

  it("displays 100% if current is greater than total", () => {
    const wrapper = shallowMount(AdminProgressBar, {
      props: { current: 120, message: message, total: total },
    });

    assert.include(wrapper.text(), `100%`);
  });

  it("displays the value of the message prop", () => {
    const wrapper = shallowMount(AdminProgressBar, {
      props: { current: current, message: message, total: total },
    });

    assert.include(wrapper.text(), message);
  });
});
