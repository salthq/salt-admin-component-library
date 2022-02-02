import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminRemoveBadge from "@/components/AdminRemoveBadge/AdminRemoveBadge.vue";

const text = "Test text";
const label = "Test label";

const wrapper = shallowMount(AdminRemoveBadge, {
  props: { text, label },
});

describe("AdminRemoveBadge.vue", () => {
  it("displays the value of the text prop", () => {
    assert.include(wrapper.text(), text);
  });

  it("shows a label if a label has been passed", () => {
    assert.include(wrapper.text(), label);
  });

  it("emits a 'remove' event when clicked", () => {
    const button = wrapper.find("button");
    button.trigger("click");

    assert.isOk(wrapper.emitted("remove"));
  });
});
