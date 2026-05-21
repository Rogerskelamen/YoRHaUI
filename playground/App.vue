<template>
  <yrh-heading :subtext="subtext">YORHA UI PLAYGROUND</yrh-heading>

  <br />

  <div style="display: flex; gap: 12px; align-items: center">
    <yrh-button size="sm">SMALL BUTTON</yrh-button>
    <yrh-button size="md" :active="true">MEDIUM BUTTON</yrh-button>
    <yrh-button size="lg">LARGE BUTTON</yrh-button>
  </div>

  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, illum
    voluptate ducimus minima libero optio soluta non corrupti laudantium saepe
    error tenetur, a delectus. In perferendis expedita ullam explicabo id!
  </p>
</template>

<script lang="ts" setup>
const subtext = {
  enable: true,
  content: '开发中',
};
</script>
