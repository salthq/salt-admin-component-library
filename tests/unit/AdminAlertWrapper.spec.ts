import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminAlertWrapper from "../../src/components/AdminAlertWrapper/AdminAlertWrapper.vue";

let wrapper;

describe("AdminAlertWrapper.vue", () => {
  it("exists if visible property is true", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      data() {
        return {
          visible: true,
        };
      },
    });

    const component = wrapper.find(".alert-wrapper");

    assert.isTrue(component.exists());
  });

  it("does not exist if visible property is false", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      data() {
        return {
          visible: false,
        };
      },
    });

    const component = wrapper.find(".alert-wrapper");

    assert.isFalse(component.exists());
  });

  it("has the 'alert-success' class if props.variation is set to success", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        variation: "success",
      },
    });

    const component = wrapper.find(".alert-wrapper");

    assert.isTrue(component.classes("alert-success"));
  });

  it("has the 'alert-warning' class if props.variation is set to warning", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        variation: "warning",
      },
    });

    const component = wrapper.find(".alert-wrapper");

    assert.isTrue(component.classes("alert-warning"));
  });

  it("has the 'alert-failure' class if props.variation is set to failure", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        variation: "failure",
      },
    });

    const component = wrapper.find(".alert-wrapper");

    assert.isTrue(component.classes("alert-failure"));
  });

  it("has a dismiss button if props.dismissable is set to true", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        dismissable: true,
      },
    });

    const component = wrapper.find(".alert-dismiss");

    assert.isTrue(component.exists());
  });

  it("does not have a dismiss button if props.dismissable is set to false", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        dismissable: false,
      },
    });

    const component = wrapper.find(".alert-dismiss");

    assert.isFalse(component.exists());
  });

  it("disappears if dismiss button is clicked", () => {
    wrapper = shallowMount(AdminAlertWrapper, {
      props: {
        dismissable: true,
      },
    });

    assert.isTrue(wrapper.vm.visible);

    const button = wrapper.find("button");
    button.trigger("click");

    assert.isFalse(wrapper.vm.visible);
  });
});
