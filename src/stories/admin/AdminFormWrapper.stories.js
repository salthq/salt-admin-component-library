import SltAdminButton from "../../components/AdminButton/AdminButton.vue";
import SltAdminFormWrapper from "../../components/AdminFormWrapper/AdminFormWrapper.vue";

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
  components: { SltAdminFormWrapper },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #header>
        {{args.header}}
    </template>
    <template #content>
        {{args.content}}
    </template>
  </slt-admin-form-wrapper>`,
});

WithHeader.args = {
  header: "Form header",
  content: "Form content",
};

export const WithCustomActions = (args) => ({
  components: { SltAdminFormWrapper, SltAdminButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #header>
        {{args.header}}
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
  header: "Form header",
  content: "Form content",
};
