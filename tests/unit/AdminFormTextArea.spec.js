import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormTextArea from "@/components/AdminFormTextArea/AdminFormTextArea.vue";
import AdminFormItemWrapper from "@/components/AdminFormItemWrapper.vue";
import { nextTick } from "vue";

const label = "Text Area Test";
const inputId = "text_area";

let wrapper = mount(AdminFormTextArea, {
  props: { label, inputId },
  components: { AdminFormItemWrapper },
});

describe("AdminFormTextArea.vue", () => {
  it("sets the input name equal to the value of props.inputId", () => {
    const input = wrapper.find("textarea");

    assert.equal(input.attributes("name"), inputId);
  });

  it("sets the input id equal to the value of props.inputId", () => {
    const input = wrapper.find("textarea");

    assert.equal(input.attributes("id"), inputId);
  });

  it("emits 'input' when an input event is triggered", async () => {
    const inputVal = "test";

    const textarea = wrapper.find("textarea");
    await textarea.setValue(inputVal);

    assert.equal(textarea.element.value, inputVal);
    assert.exists(wrapper.emitted().input);
  });

  it("shows an indicator of characters added vs max length if max length props is added", async () => {
    const value = "Some text";
    let wrapper = mount(AdminFormTextArea, {
      props: { label, inputId, maxLength: 100, value: value },
      components: { AdminFormItemWrapper },
    });

    await nextTick();

    const characterLimit = wrapper.find("[data-test='character-limit']");

    assert.isTrue(characterLimit.exists());
    assert.equal(characterLimit.text(), `${value.length}/100`);
  });
});
