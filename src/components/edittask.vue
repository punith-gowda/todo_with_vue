<template>
  <q-card>
    <modalheader> Edit Task</modalheader>
    <q-form @submit="submitform">
      <q-card-section class="q-pb-none q-pt-lg">
        <modaltask :name.sync="tasktoadd.name"> </modaltask>
      </q-card-section>
      <q-card-section>
        <modaldate :duedate.sync="tasktoadd.duedate" />
      </q-card-section>
      <q-card-section>
        <modaltime :duetime.sync="tasktoadd.duetime" />
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
  props: ["task", "id"],
  data() {
    return {
      tasktoadd: {},
    };
  },
  methods: {
    ...mapActions("tasks", ["updatetask"]),
    submitform() {
      this.updatetask({
        id: this.id,
        updates: this.tasktoadd,
      });
      this.$emit("close");
    },
  },

  created() {
    this.tasktoadd = Object.assign({}, this.task);
  },
};
</script>

<style>
</style>