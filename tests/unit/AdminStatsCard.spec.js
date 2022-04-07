import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminStatsCard from "@/components/AdminStatsCard/AdminStatsCard.vue";
import IconLoading from "@/components/IconLoading/IconLoading.vue";

const label = "Test";
const value = 100;

describe("AdminStatsCard.vue", () => {
  it("displays the label", () => {
    const wrapper = mount(AdminStatsCard, {
      props: { label: label, value: value },
    });

    assert.include(wrapper.text(), label);
  });

  it("displays the value", () => {
    const wrapper = mount(AdminStatsCard, {
      props: { label: label, value: value },
    });

    assert.include(wrapper.text(), value);
  });

  it("shows a loading icon if loading is set to true", () => {
    const wrapper = mount(AdminStatsCard, {
      props: { label: label, loading: true, value: value },
    });

    const icon = wrapper.findComponent(IconLoading);

    assert.isTrue(icon.exists());
  });
});
