<template>
  <q-card>
    <modalheader> Add Task</modalheader>
    <q-form @submit="submitform">
      <q-card-section class="q-pb-none q-pt-lg">
        <modaltask :name.sync="tasktoadd.name"> </modaltask>
      </q-card-section>
      <q-card-section>
        <modaldate
          v-if="tasktoadd.name.length"
          :duedate.sync="tasktoadd.duedate"
        />
      </q-card-section>
      <q-card-section>
        <modaltime
          v-if="tasktoadd.duedate.length"
          :duetime.sync="tasktoadd.duetime"
        />
      </q-card-section>
      <q-card-actions align="right">
        <modalbuttons></modalbuttons>
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

import mixinaddedit from "src/mixins/add-edit";
export default {
  mixins: [mixinaddedit],
  data() {
    return {
      tasktoadd: {
        name: "",
        duedate: "",
        duetime: "",
        completed: "",
        completed: false,
      },
    };
  },
  methods: {
    ...mapActions("tasks", ["addtask"]),
    submitform() {
      this.addtask(this.tasktoadd);
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>