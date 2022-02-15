import SltAdminButton from "../../components/AdminButton/AdminButton.vue";
import SltAdminFormWrapper from "../../components/AdminFormWrapper/AdminFormWrapper.vue";
import SltAdminFormHeading from "../../components/AdminFormHeading/AdminFormHeading.vue";

export default {
  title: "Admin/Forms/Wrapper",
  component: { SltAdminFormWrapper },
};

export const ContentOnly = (args) => ({
  components: { SltAdminFormWrapper },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #content>
        {{args.content}}
    </template>
  </slt-admin-form-wrapper>`,
});

ContentOnly.args = {
  content: "Form content",
};

export const WithHeader = (args) => ({
  components: { SltAdminFormWrapper, SltAdminFormHeading },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #header>
      <slt-admin-form-heading :title="args.title" />
    </template>
    <template #content>
        {{args.content}}
    </template>
  </slt-admin-form-wrapper>`,
});

WithHeader.args = {
  title: "Form header",
  content: "Form content",
};

export const WithCustomActions = (args) => ({
  components: { SltAdminFormWrapper, SltAdminFormHeading, SltAdminButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #header>
      <slt-admin-form-heading :title="args.title" />
    </template>
    <template #content>
        {{args.content}}
    </template>
    <template #actions>
        <slt-admin-button
            variation="secondary"
            label="Cancel"
        />
        <slt-admin-button
            variation="primary"
            label="Save"
            class="ml-3"
        />
    </template
  </slt-admin-form-wrapper>`,
});

WithCustomActions.args = {
  title: "Form header",
  content: "Form content",
};
