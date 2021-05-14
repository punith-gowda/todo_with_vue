<template>
  <q-input
    filled
    autofocus
    :value="name"
    @input="$emit('update:name', $event)"
    label="Task Name"
    :rules="[(val) => !!val || 'Field is required']"
  >
    <template v-slot:append>
      <q-icon
        name="close"
        v-if="name"
        @click="$emit('update:name', '')"
        class="cursor-pointer"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style>
</style>