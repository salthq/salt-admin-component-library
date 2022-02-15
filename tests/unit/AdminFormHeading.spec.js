import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormHeading from "@/components/AdminFormHeading/AdminFormHeading.vue";

const title = "Form title";

const text = "Form description";

const wrapper = mount(AdminFormHeading, {
  props: {
    title: title,
    text: text,
  },
});

describe("AdminFormWrapper.vue", () => {
  it("displays the value of the title prop", () => {
    assert.equal(
      wrapper.find("[data-test='form-heading-title']").text(),
      title
    );
  });

  it("displays the value of the text prop", () => {
    assert.equal(wrapper.find("[data-test='form-heading-text']").text(), text);
  });
});
