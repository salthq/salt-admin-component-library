# Salt Admin Component Library

A collection of components built with Vue3, TypeScript which we use when building the administration dashboards of our applications.

## Project setup

```
npm install
```

## Storybook

We use [Storybook](https://storybook.js.org/) for visualizing and documenting components. To run a local instance of storybook run:

```
npm run storybook
```

You can also view them at https://salt-admin-component-library.netlify.app/

## Run your unit tests

To run all tests:

```
npm run test:unit
```

To run a single test:

```
npm run test:single /path/to/test/file
```

## Lints and fixes files

```
npm run lint
```

## Adding a new component

Follow these steps when adding a new component to the library

### Create a new folder in `src/components`

The folder should start with 'Admin' and then the name of the component in camel case. E.g for a form input component,
the name would be `AdminFormInput`.

### Create the vue component

Add a `.vue` file in the newly created folder with the same name as the folder. There are 3 sections to add for each component. The first is a `script` tag which exports the name of the component:

```js
<script lang="ts">
export default {
  name: "SltAdminFormInput",
};
</script>
```

The next section is the main `script` element. This is where you define props, emits, reactive data, computed properties and methods used by the component. We use the composition API using script setup and typescript, so your script tag must start with this:

```js
<script setup lang="ts">
```

Finally, we have the template itself at the bottom of the page.

```html
<script lang="ts">
  // Add a default export with the name of the component
</script>

<script setup lang="ts">
  // Component logic and data goes here using composition API with script setup and TypeScript
</script>

<template>
  <!-- Component HTML -->
</template>
```

### Add a file which registers and exports the component

In the same folder, add a file called `index.ts` and add the following code:

```js
import { App, Plugin } from "vue";

import AdminFormInput from "./AdminFormInput.vue";

import { registerComponent } from "@/utils/plugins";

export default {
  install(app: App) {
    registerComponent(app, AdminFormInput);
  },
} as Plugin;

export { AdminFormInput as SltAdminFormInput };

```

The only part that changes is the name of the component.

### Add the component to the main component export list

There is a file in `src/components` called `admin.ts`. New components must be imported here and then exported. This file is used when the component library is installed to automatically register all components globally

```js
import AdminFormInput from "./AdminFormInput";

export { AdminFormInput };
```

### Add a story for the component

We use [Storybook](https://storybook.js.org/) for visualizing and documenting the components in this library. Every new component must have at least one story added. You can add one by creating a new file in `stories/admin` with the same name as the component and adding `stories.js` at the end. A simplified version of a story looks a little like this:

```js
import SltAdminFormInput from "../../src/components/AdminFormInput/AdminFormInput.vue";

export default {
  title: "Admin/Forms/Input",
  component: SltAdminFormInput,
};

const Template = (args) => ({
  components: { SltAdminFormInput },
  setup() {
    return {
      args,
    };
  },
  template: `<slt-admin-form-input v-bind="args" />`,
});

export const Default = Template.bind({});

Default.args = {
  inputId: "example_input",
  label: "Name",
  type: "text",
};
```

Once you've added your story, you should be able to see it in your browser when you run
`npm run storybook`

### Add unit tests for the component

We currently use [vue-test-utils](https://test-utils.vuejs.org/guide/) along with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) for our unit tests. The test suite runs automatically when code is pushed up to the repo so we can ensure we don't have regressions after changes are made.

Create a new file in `tests/unit` with the name of the component followed by `.spec.js`. Here's an example of a simplified setup with one test:

```js
import { mount } from "@vue/test-utils";
import { assert } from "chai";

import AdminFormInput from "@/components/AdminFormInput/AdminFormInput.vue";

describe("AdminFormInput.vue", () => {
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
```

### Add the component type definition

In order for an app which installs this library to get IDE auto-completion and type inference when using the components, we need to augment Vue's `GlobalComponents` interface. When you add a new component, you need to import the `.vue` file of the component in `src/global-components.d.ts` and add it to the interface

```js
import SltAdminFormInput from "@pango-studio/salt-admin-component-library/src/components/AdminFormInput/AdminFormInput.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    SltAdminFormInput: typeof SltAdminFormInput;
  }
```

## Releasing a new version

Once you are ready to release a new version, you need to run the build steps to populate the `dist` folder with:

```
npm run build:vue
```

Once that process is completed, ensure you are logged in with your npm account details:

```
npm login
```

Then set the new version number in `package.json` and run:

```
npm publish
```
