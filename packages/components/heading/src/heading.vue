<template>
  <component :is="tag" class="yrh-heading">
    <span
      class="yrh-heading__content"
      :class="{ 'yrh-heading-shadow': props.shadow }"
    >
      <slot />
    </span>
    <span v-if="showSub" class="yrh-heading__subtext">
      - {{ props.subtext.content }}
    </span>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { headingProps } from './heading';

const props = defineProps(headingProps);
const tag = computed(() => {
  return `h${props.level}`;
});
const showSub = computed(() => {
  return props.subtext.enable && props.level <= 3;
});

defineOptions({
  name: 'YrhHeading',
});
</script>

<style scoped>
.yrh-heading {
  color: var(--yrh-text-color);
  letter-spacing: 0.05em;
}

.yrh-heading .yrh-heading__content {
  font-weight: normal;
}

.yrh-heading .yrh-heading__content.yrh-heading-shadow {
  text-shadow: 0.14em 0.12em 0 var(--yrh-text-shadow);
}

.yrh-heading .yrh-heading__subtext {
  font-size: var(--yrh-font-size-md);
}
</style>
