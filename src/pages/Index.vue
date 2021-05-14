<template>
  <q-page class="q-pa-md">
    <div v-if="Object.keys(tasks).length">
      <q-list separator bordered>
        <task
          v-for="(task, key) in tasks"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
    <div v-else>
      <p class="text-center text-h4">No Tasks Yet</p>
    </div>
    <div class="absolute-bottom q-pb-md text-center">
      <q-btn
        @click="addtodo = !addtodo"
        color="primary"
        round
        icon="add"
        size="24px"
      >
      </q-btn>
    </div>

    <q-dialog v-model="addtodo" persistent>
      <addtask @close="addtodo = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
  components: {
    task: require("components/task.vue").default,
    addtask: require("components/addtodotask.vue").default,
  },
  data() {
    return {
      addtodo: false,
    };
  },
};
</script>
<style>
</style>