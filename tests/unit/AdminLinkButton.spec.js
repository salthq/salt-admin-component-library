import { mount } from "@vue/test-utils";
import { assert } from "chai";

import { config } from "@vue/test-utils";

import { Link } from "@inertiajs/inertia-vue3";
config.global.stubs = {
  Link,
};
import AdminLinkButton from "@/components/AdminLinkButton/AdminLinkButton.vue";

const text = "Test text";
const url = "/admin/";

describe("AdminLinkButton.vue", () => {
  it("displays the value of the text prop", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url },
    });

    assert.include(wrapper.text(), text);
  });

  it("has an href attribute set to the value of props.link if thats been passed", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url },
    });

    const link = wrapper.find(".admin-link");

    assert.equal(link.attributes("href"), url);
  });

  it("has the 'admin-link-primary' class when variation is primary", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url, variation: "primary" },
    });

    const link = wrapper.find(".admin-link");

    assert.isTrue(link.classes("admin-link-primary"));
  });

  it("has the 'admin-link-secondary' class when variation is secondary", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url, variation: "secondary" },
    });

    const link = wrapper.find(".admin-link");

    assert.isTrue(link.classes("admin-link-secondary"));
  });

  it("has the 'admin-link-white' class when variation is white", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url, variation: "white" },
    });

    const link = wrapper.find(".admin-link");

    assert.isTrue(link.classes("admin-link-white"));
  });

  it("has the 'admin-link-danger' class when variation is danger", () => {
    const wrapper = mount(AdminLinkButton, {
      props: { text, link: url, variation: "danger" },
    });

    const link = wrapper.find(".admin-link");

    assert.isTrue(link.classes("admin-link-danger"));
  });
});
