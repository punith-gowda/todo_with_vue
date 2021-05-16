<template>
  <q-select
    filled
    v-model="sortBy"
    emit-value
    :options="options"
    class="col-3"
    map-options
    label="SortBy"
  />
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      options: [
        {
          label: "Name",
          value: "name",
        },
        {
          label: "Date",
          value: "duedate",
        },
      ],
    };
  },
  computed: {
    ...mapState("tasks", ["sort"]),
    sortBy: {
      get() {
        return this.sort;
      },
      set(value) {
        this.searchfilter(value);
      },
    },
  },
  methods: {
    ...mapActions("tasks", ["searchfilter"]),
  },
};
</script>

<style>
</style>