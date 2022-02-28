import { mount } from "@vue/test-utils";
import { assert } from "chai";
import sinon from "sinon";

import AdminFormUpload from "@/components/AdminFormUpload/AdminFormUpload.vue";
import { nextTick } from "vue";

const file = { size: 1500, type: "image/png", name: "avatar.png" };

describe("AdminFormUpload.vue", () => {
  it("has a hidden input field", () => {
    const wrapper = mount(AdminFormUpload);

    const fileInput = wrapper.find("[data-test='real-hidden-input']");

    assert.isTrue(fileInput.exists());
    assert.equal(fileInput.attributes("type"), "file");
  });

  it("accepts the file types passed as a prop", () => {
    const wrapper = mount(AdminFormUpload, {
      props: { fileTypes: ["pdf", "docx", "xls"] },
    });

    const fileInput = wrapper.find("[data-test='real-hidden-input']");

    assert.equal(fileInput.attributes("accept"), ".pdf,.docx,.xls");
  });

  // it("launches the file browser when fake input container is clicked", function () {
  //   const fakeOpenFileBrowser = sinon.replace(
  //     AdminFormUpload.vm.launchFileBrowser,
  //     "launchFileBrowser",
  //     sinon.fake()
  //   );
  //   const wrapper = mount(AdminFormUpload);
  //   const fileSelector = wrapper.find("[data-test='fake-input-container']");
  //   fileSelector.trigger("click");
  //   assert.isTrue(fakeOpenFileBrowser.calledOnce);
  // });

  // it("shows the filename of the chosen file", async () => {
  //   const wrapper = mount(AdminFormUpload);
  //   wrapper.vm.file = file;

  //   await nextTick();

  //   const fileName = wrapper.find("[data-test='file-name']");
  //   assert.equal(fileName.text(), "avatar.png");
  // });

  // it("shows the size of the chosen file", async () => {
  //   const wrapper = mount(AdminFormUpload, {});

  //   wrapper.vm.file = file;
  //   await nextTick();

  //   const fileSize = wrapper.find("[data-test='file-size']");
  //   assert.equal(fileSize.text(), "File size: 1.5 KB");
  // });

  // it("allows you to reset the file", async () => {
  //   const fakeResetFile = sinon.replace(
  //     AdminFormUpload.vm,
  //     "resetFile",
  //     sinon.fake()
  //   );

  //   const wrapper = mount(AdminFormUpload, {});

  //   wrapper.vm.file = file;
  //   await nextTick();

  //   const resetFile = wrapper.find("[data-test='reset-file']");
  //   resetFile.trigger("click");

  //   assert.isTrue(fakeResetFile.calledOnce);
  // });

  it("shows you a list of allowed uploads", () => {
    const wrapper = mount(AdminFormUpload, {
      props: { fileTypes: ["pdf", "docx", "xls"] },
    });

    const allowedUploads = wrapper.find("[data-test='allowed-uploads']");
    assert.equal(allowedUploads.text(), "Allowed uploads: pdf, docx, xls");
  });
});
