<template>
  <button
    class="yrh-btn"
    :class="[`yrh-btn-${size}`, { active: props.active }]"
  >
    <span v-if="props.square" class="yrh-btn__square"></span>
    <span class="yrh-btn__content">
      <slot />
    </span>
  </button>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';
import type { ButtonSize } from './button';
import { buttonSizes } from './button';

const props = defineProps({
  size: {
    type: String as PropType<ButtonSize>,
    default: 'md' as ButtonSize,
    validator: (v: string) => buttonSizes.includes(v as ButtonSize),
  },
  active: {
    type: Boolean,
    default: false,
  },
  square: {
    type: Boolean,
    default: true,
  },
});

defineOptions({
  name: 'YrhButton',
});
</script>

<style scoped>
.yrh-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--yrh-btn-gap);
  background-color: var(--yrh-btn-bg);
  color: var(--yrh-text-color);
  letter-spacing: var(--yrh-letter-spacing);
}

.yrh-btn.active {
  background-color: var(--yrh-btn-bg-active);
  color: var(--yrh-text-color-light);
}

.yrh-btn__square {
  content: '';
  display: inline-block;
  width: var(--yrh-btn-deco-size);
  height: var(--yrh-btn-deco-size);
  background-color: currentColor;
  flex-shrink: 0;
}

.yrh-btn-sm {
  --yrh-btn-deco-size: calc(var(--yrh-font-size-sm) - 2px);
  --yrh-btn-gap: calc(var(--yrh-font-size-sm) / 2);
  padding: 4px 6px;
  font-size: var(--yrh-font-size-sm);
}

.yrh-btn-md {
  --yrh-btn-deco-size: calc(var(--yrh-font-size-md) - 2px);
  --yrh-btn-gap: calc(var(--yrh-font-size-md) / 2);
  padding: 5px 7px;
  font-size: var(--yrh-font-size-md);
}

.yrh-btn-lg {
  --yrh-btn-deco-size: calc(var(--yrh-font-size-lg) - 2px);
  --yrh-btn-gap: calc(var(--yrh-font-size-lg) / 2 + 2px);
  padding: 6px 8px;
  font-size: var(--yrh-font-size-lg);
}
</style>
