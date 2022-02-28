import { mount } from "@vue/test-utils";
import { assert } from "chai";

import { nextTick } from "vue";

import AdminFormInput from "@/components/AdminFormInput/AdminFormInput.vue";
import AdminFormItemWrapper from "@/components/AdminFormItemWrapper/AdminFormItemWrapper.vue";

const label = "First Name";
const inputId = "first_name";
const value = "first_name";

describe("AdminFormInput.vue", () => {
  it("sets the input name equal to the value of props.name", () => {
    const wrapper = mount(AdminFormInput, {
      props: { label, inputId, value },
      components: { AdminFormItemWrapper },
    });

    const input = wrapper.find("input");

    assert.equal(input.attributes("name"), inputId);
  });

  it("sets the input id equal to the value of props.inputId", () => {
    const wrapper = mount(AdminFormInput, {
      props: { label, inputId, value },
      components: { AdminFormItemWrapper },
    });

    const input = wrapper.find("input");

    assert.equal(input.attributes("id"), inputId);
  });

  it("shows the loading div if loading is true", () => {
    const wrapper = mount(AdminFormInput, {
      props: { label, inputId, value, loading: true },
      components: { AdminFormItemWrapper },
    });

    const loading = wrapper.find("span.input-loading");

    assert.isTrue(loading.exists());
  });

  it("emits the input value", async () => {
    const wrapper = mount(AdminFormInput, {
      props: { label, inputId, value },
      components: { AdminFormItemWrapper },
    });

    const inputVal = "testInput";

    const input = wrapper.find("input");
    input.setValue(inputVal);

    await nextTick();

    assert.equal(input.element.value, inputVal);
    assert.exists(wrapper.emitted().input);

    assert.equal(wrapper.emitted().input[0].shift(), inputVal);
  });

  it("displays an error message if an error is passed as a prop", async () => {
    const wrapper = mount(AdminFormInput, {
      props: { label, inputId, value, error: "Error message" },
      components: { AdminFormItemWrapper },
    });

    const error = wrapper.find("[data-test='error'");

    assert.isTrue(error.exists());
    assert.equal(error.text(), "Error message");
  });
});
