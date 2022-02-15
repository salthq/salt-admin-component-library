import SltAdminButton from "../../src/components/AdminButton/AdminButton.vue";
import SltAdminCardWrapper from "../../src/components/AdminCardWrapper/AdminCardWrapper.vue";

export default {
  title: "Admin/Card Wrapper",
  component: SltAdminCardWrapper,
  argTypes: {
    title: {
      control: {
        type: "text",
      },
    },
    actions: {
      control: {
        type: null,
      },
    },
    default: {
      control: {
        type: "text",
      },
    },
  },
};

export const ContentOnly = (args) => ({
  components: { SltAdminCardWrapper },
  setup() {
    return { args };
  },
  template: `<slt-admin-card-wrapper v-bind="args">
        {{args.default}}
    </slt-admin-card-wrapper>`,
});

ContentOnly.args = {
  default: `Card content`,
  hasPadding: true,
};

ContentOnly.parameters = { controls: { exclude: ["title", "actions"] } };

export const WithTitle = (args) => ({
  components: { SltAdminCardWrapper },
  setup() {
    return { args };
  },
  template: `<slt-admin-card-wrapper v-bind="args">
        <template #title>
            <h1 class='text-lg leading-6 font-medium text-gray-900'>
                {{args.title}}
            </h1>                
        </template>
        {{args.default}}
    </slt-admin-card-wrapper>`,
});

WithTitle.args = {
  title: "Card title",
  default: `Card content`,
  hasPadding: true,
};

WithTitle.parameters = { controls: { exclude: ["actions"] } };

export const WithTitleAndActions = (args) => ({
  components: { SltAdminCardWrapper, SltAdminButton },
  setup() {
    return { args };
  },
  template: `<slt-admin-card-wrapper v-bind="args">
            <template #title>
                <h1 class='text-lg leading-6 font-medium text-gray-900'>
                    {{args.title}}
                </h1>
            </template>
            <template #actions>
                <slt-admin-button variation="white" label="Cancel" />
                <slt-admin-button />
            </template>
            {{args.default}}
    </slt-admin-card-wrapper>`,
});

WithTitleAndActions.args = {
  title: "Card title",
  default: `Card content`,
  hasPadding: true,
};
