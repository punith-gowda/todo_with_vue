<template>
  <q-page class="q-pa-md bg-grey-4">
    <div>
      <div>
        <tasktodoes
          v-if="Object.keys(taskstodo).length"
          :taskstodos="taskstodo"
        />
        <p v-else class="text-center text-bold text-orange-6 text-h4 q-mt-lg">
          Hurray! All Tasks Completed
        </p>
      </div>
      <div>
        <taskscompleted
          v-if="Object.keys(taskscompleted).length"
          :taskscompleted="taskscompleted"
        />
        <p v-else class="text-center text-bold text-red-6 text-h4 q-mt-lg">
          No Task is Completed Yet
        </p>
      </div>
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
    ...mapGetters("tasks", ["taskstodo", "taskscompleted"]),
  },
  components: {
    addtask: require("components/addtodotask.vue").default,
    tasktodoes: require("components/tasktodo.vue").default,
    taskscompleted: require("components/taskscompleted.vue").default,
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