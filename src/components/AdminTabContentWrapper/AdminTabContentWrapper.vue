<script lang="ts">
export default {
  name: "SltAdminTabContentWrapper",
};
</script>

<script setup lang="ts">
defineProps<{
  id: string;
}>();
</script>

<template>
  <transition
    enter-active-class="transition-all transform ease-in duration-300"
    enter-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class=" absolute "
  >
    <div :id="id" class="block w-full">
      <slot></slot>
    </div>
  </transition>
</template>
