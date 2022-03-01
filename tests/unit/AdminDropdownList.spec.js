import { mount, shallowMount } from "@vue/test-utils";
import { assert } from "chai";

import { nextTick } from "vue";

import AdminDropdownList from "@/components/AdminDropdownList/AdminDropdownList.vue";

const itemList = [
  {
    id: "document",
    name: "Document",
  },
  {
    id: "file",
    name: "File",
  },
  {
    id: "link",
    name: "Link",
  },
  {
    id: "presentation",
    name: "Presentation",
  },
  {
    id: "spreadsheet",
    name: "Spreadsheet",
  },
  {
    id: "folder",
    name: "Folder",
  },
];

let wrapper = shallowMount(AdminDropdownList, {
  props: {
    itemList: itemList,
  },
});

describe("AdminDropdownList.vue", () => {
  it("displays the dropdown list when input is clicked", async () => {
    assert.isFalse(wrapper.vm.showItemList);

    const input = wrapper.find("input");
    input.trigger("click");

    await nextTick();

    assert.isTrue(wrapper.vm.showItemList);
    assert.isTrue(wrapper.find("[data-test='dropdown-list']").exists());
  });

  it("displays the selected item", async () => {
    wrapper.vm.showItemList = true;
    await nextTick();

    const dropdownListItem = wrapper.find("[data-test='dropdown-list-item']");
    dropdownListItem.trigger("click");

    await nextTick();

    const selectedItem = wrapper.find("[data-test='selected-item-name']");
    assert.isTrue(selectedItem.exists());
    assert.equal(itemList[0].name, selectedItem.text());
  });

  it("can reset the selection", async () => {
    wrapper.vm.showItemList = true;
    await nextTick();

    const dropdownListItem = wrapper.find("[data-test='dropdown-list-item']");
    dropdownListItem.trigger("click");

    await nextTick();

    assert.equal(itemList[0].name, wrapper.vm.selectedItem.name);

    const resetSelection = wrapper.find("[data-test='reset-selection']");
    resetSelection.trigger("click");
    await nextTick();

    assert.isNull(wrapper.vm.selectedItem);
  });

  it("can show a button which allows you to control when the item is selected", () => {
    const wrapper = mount(AdminDropdownList, {
      props: {
        itemList: itemList,
        showButton: true,
      },
    });

    const button = wrapper.find("[data-test='select-button']");

    assert.isTrue(button.exists());
  });
});
