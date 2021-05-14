<template>
  <q-card>
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>
    <q-form @submit="submitform">
      <q-card-section class="q-pb-none q-pt-lg">
        <q-input
          filled
          autofocus
          v-model="tasktoadd.name"
          label="Task Name"
          :rules="[(val) => !!val || 'Field is required']"
        />
      </q-card-section>
      <q-card-section
        ><q-input
          filled
          label="DueDate"
          mask="date"
          :rules="['date']"
          v-if="tasktoadd.name.length"
          v-model="tasktoadd.duedate"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="tasktoadd.duedate">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template> </q-input
      ></q-card-section>
      <q-card-section>
        <q-input
          mask="time"
          :rules="['time']"
          filled
          v-if="tasktoadd.duedate.length"
          label="DueTime"
          v-model="tasktoadd.duetime"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="tasktoadd.duetime">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-time>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Save" type="submit" color="primary" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
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