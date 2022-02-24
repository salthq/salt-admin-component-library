import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";
import { nextTick } from "vue";

import AdminTabButton from "@/components/AdminTabButton/AdminTabButton.vue";

const label = "Test";
const tab = "some-tab";

describe("AdminTabButton.vue", () => {
  it("displays the value of the label prop", () => {
    const wrapper = shallowMount(AdminTabButton, {
      props: { label, tab },
    });

    assert.include(wrapper.text(), label);
  });

  it("has the 'active-tab' class when active", () => {
    const wrapper = shallowMount(AdminTabButton, {
      props: { label, tab, active: true },
    });

    const tabButton = wrapper.find("button");

    assert.isTrue(tabButton.classes("active-tab"));
  });

  it("has the 'inactive-tab' class when inactive", () => {
    const wrapper = shallowMount(AdminTabButton, {
      props: { label, tab, active: false },
    });

    const tabButton = wrapper.find("button");

    assert.isTrue(tabButton.classes("inactive-tab"));
  });

  it("emits 'selected' and the value of the tab prop when clicked", async () => {
    const wrapper = shallowMount(AdminTabButton, {
      props: { label, tab, active: false },
    });

    const tabButton = wrapper.find("button");
    tabButton.trigger("click");

    await nextTick();

    assert.exists(wrapper.emitted().selected);
    assert.equal(wrapper.emitted().selected[0].shift(), tab);
  });
});
