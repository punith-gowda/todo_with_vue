<template>
  <q-input
    filled
    autofocus
    v-select-all
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
import { selectAll } from "src/directives/directive-select-all";
export default {
  props: ["name"],
  directives: {
    selectAll,
  },
};
</script>

<style>
</style>