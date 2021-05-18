<template>
  <q-page class="q-pa-md bg-grey-4">
    <div>
      <div class="row q-mb-lg">
        <search />
        <sort class="q-ml-md" />
      </div>
      <p
        v-if="
          !Object.keys(taskscompleted).length &&
          search &&
          !Object.keys(taskstodo).length
        "
        class="text-center text-bold text-h4"
      >
        Not Found
      </p>
      <div class="relative-position">
        <transition
          appear
          enter-active-class="animated zoomIn"
          leave-active-class="animated absolute-top zoomOut"
        >
          <q-banner
            v-if="!Object.keys(taskstodo).length && !search"
            class="bg-cyan-2"
          >
            <p class="text-center text-bold text-orange-6 text-h5 q-mt-lg">
              <q-icon size="30px" name="celebration" color="red" />
              Hurray! All Tasks Completed
              <q-icon size="30px" name="celebration" color="red" />
            </p>
            <template v-slot:action>
              <q-btn
                color="orange-6"
                @click="addtodo = !addtodo"
                label="Add Task"
              />
            </template>
          </q-banner>
          <tasktodoes
            v-if="Object.keys(taskstodo).length"
            :taskstodos="taskstodo"
          />
        </transition>
      </div>
      <div>
        <p
          v-if="!Object.keys(taskscompleted).length && !search"
          class="text-center text-bold text-red-6 text-h4 q-mt-lg"
        >
          No Task is Completed Yet
        </p>
        <taskscompleted
          v-if="Object.keys(taskscompleted).length"
          :taskscompleted="taskscompleted"
        />
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
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["taskstodo", "taskscompleted"]),
    ...mapState("tasks", ["search"]),
  },
  components: {
    addtask: require("components/addtodotask.vue").default,
    tasktodoes: require("components/tasktodo.vue").default,
    taskscompleted: require("components/taskscompleted.vue").default,
    search: require("components/search.vue").default,
    sort: require("components/sort.vue").default,
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