<template>
  <q-card-section class="row items-center q-pb-none">
    <div class="text-h6"><slot></slot></div>
    <q-space />
    <q-btn icon="close" flat round dense v-close-popup />
  </q-card-section>
</template>

<script>
export default {};
</script>

<style>
</style>