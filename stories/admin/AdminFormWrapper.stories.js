import SltAdminButton from "../../src/components/AdminButton/AdminButton.vue";
import SltAdminFormWrapper from "../../src/components/AdminFormWrapper/AdminFormWrapper.vue";
import SltAdminFormHeading from "../../src/components/AdminFormHeading/AdminFormHeading.vue";

export default {
  title: "Admin/Forms/Wrapper",
  component: { SltAdminFormWrapper },
};

export const FieldsOnly = (args) => ({
  components: { SltAdminFormWrapper },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #fields>
        {{args.content}}
    </template>
  </slt-admin-form-wrapper>`,
});

FieldsOnly.args = {
  content: "Form content",
};

export const WithHeading = (args) => ({
  components: { SltAdminFormWrapper, SltAdminFormHeading },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #heading>
      <slt-admin-form-heading :title="args.title" />
    </template>
    <template #fields>
        {{args.content}}
    </template>
  </slt-admin-form-wrapper>`,
});

WithHeading.args = {
  title: "Form heading",
  content: "Form content",
};

export const WithCustomActions = (args) => ({
  components: { SltAdminFormWrapper, SltAdminFormHeading, SltAdminButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-form-wrapper v-bind="args">
    <template #heading>
      <slt-admin-form-heading :title="args.title" />
    </template>
    <template #fields>
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
  title: "Form heading",
  content: "Form content",
};
