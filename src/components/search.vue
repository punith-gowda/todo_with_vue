<template>
  <q-input
    class="col"
    outlined
    v-model="searchfield"
    @keyup.esc="searchfield = ''"
    v-select-all
    placeholder="Search"
    maxlength="12"
  >
    <template v-slot:append>
      <q-icon
        v-if="searchfield !== ''"
        name="close"
        @click="searchfield = ''"
        class="cursor-pointer"
      />
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script>
import { mapState } from "vuex";
import { selectAll } from "src/directives/directive-select-all";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapState("tasks", ["search"]),
    searchfield: {
      get() {
        return this.search;
      },
      set(value) {
        this.setsearch(value);
      },
    },
  },
  directives: {
    selectAll,
  },
  methods: {
    ...mapActions("tasks", ["setsearch"]),
  },
};
</script>

<style>
</style>