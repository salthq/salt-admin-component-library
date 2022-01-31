import { shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import AdminBreadcrumbs from "../../src/components/AdminBreadcrumbs/AdminBreadcrumbs.vue";

const breadcrumbs = [
  {
    url: "/admin/link",
    title: "Link 1",
  },
  {
    url: "/admin/link/2",
    title: "Link 2",
  },
  {
    url: "/admin/link/3",
    title: "Current",
  },
];

const wrapper = shallowMount(AdminBreadcrumbs, {
  props: { breadcrumbs, useInertiaLinks: false },
  global: {
    stubs: {
      AppInertiaLink: true,
    },
  },
});

describe("AdminBreadcrumbs.vue", () => {
  it("renders a list item for each breadcrumb added", () => {
    const links = wrapper.findAll("li");

    assert.equal(breadcrumbs.length, links.length);
  });

  it("renders an svg for each breadcrumb except for the last one", () => {
    const svgs = wrapper.findAll("svg");

    assert.equal(breadcrumbs.length - 1, svgs.length);
  });
});
