<script lang="ts">
export default {
  name: "SltAdminProgressBar",
};
</script>

<script setup lang="ts">
import { computed } from "vue";

type statusType = "waiting" | "inProgress" | "complete";

const props = withDefaults(
  defineProps<{
    current?: number;
    message?: string;
    total: number;
  }>(),
  { current: 0 }
);

const percentage = computed(() => {
  if (props.current >= props.total) return 100;

  return Math.round((props.current / props.total) * 100);
});

const status = computed((): statusType => {
  if (percentage.value === 100) return "complete";
  if (percentage.value > 0 && percentage.value < 100) return "inProgress";

  return "waiting";
});

const messageClasses = computed(() => {
  return {
    waiting: "text-gray-600 bg-gray-200",
    inProgress: "text-blue-600 bg-blue-200",
    complete: "text-green-600 bg-green-200",
  }[status.value];
});

const percentageClasses = computed(() => {
  return {
    waiting: "text-gray-600",
    inProgress: "text-blue-600",
    complete: "text-green-600",
  }[status.value];
});

const progressBarBackgroundClasses = computed(() => {
  return {
    waiting: "bg-gray-200",
    inProgress: "bg-blue-200",
    complete: "bg-green-200",
  }[status.value];
});

const progressBarForegroundClasses = computed(() => {
  return {
    waiting: "bg-gray-600",
    inProgress: "bg-blue-600",
    complete: "bg-green-600",
  }[status.value];
});
</script>

<template>
  <div class="relative pt-1">
    <div
      class="flex mb-2 items-center"
      :class="message ? 'justify-between' : 'justify-end'"
    >
      <div v-if="message">
        <span
          class="text-xs font-bold inline-block py-1 px-2 uppercase rounded-full"
          :class="messageClasses"
        >
          {{ message }}
        </span>
      </div>
      <div class="text-right">
        <span class="text-xs font-bold inline-block" :class="percentageClasses">
          {{ percentage }}%
        </span>
      </div>
    </div>
    <div
      class="overflow-hidden h-2 mb-4 text-xs flex rounded"
      :class="progressBarBackgroundClasses"
    >
      <div
        :style="`width:${percentage}%`"
        class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
        :class="progressBarForegroundClasses"
      ></div>
    </div>
  </div>
</template>
