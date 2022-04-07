<script lang="ts">
export default {
  name: "SltAdminStatsCard",
};
</script>

<script setup lang="ts">
import SltIconLoading from "../IconLoading/IconLoading.vue";

defineProps<{
  label: string;
  loading?: boolean;
  value: string | number;
}>();
</script>

<template>
  <div class="bg-white overflow-visible sm:overflow-hidden shadow rounded-lg">
    <div class="px-4 py-4 sm:p-4">
      <dl>
        <dt class="text-xs leading-5 font-medium text-gray-500 sm:truncate">
          {{ label }}
        </dt>
        <dd class="text-2xl leading-9 font-bold">
          <span v-if="loading" class="text-primary-900">
            <slt-icon-loading class="my-4" :size="16" view-box="0 0 32 32" />
          </span>

          <span v-else class="text-gray-900">
            {{ value }}
          </span>
        </dd>
      </dl>
    </div>
  </div>
</template>
