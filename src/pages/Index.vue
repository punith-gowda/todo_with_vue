<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height">
      <template v-if="isFbConnected">
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
        >Not Found</p>

        <q-scroll-area style="height: 90%">
          <transition
            appear
            enter-active-class="animated zoomIn"
            leave-active-class="animated absolute-top zoomOut"
          >
            <q-banner v-if="!Object.keys(taskstodo).length && !search" class="bg-cyan-2">
              <p class="text-center text-bold text-orange-6 text-h5 q-mt-lg">
                <q-icon size="30px" name="celebration" color="red" />Hurray! All Tasks Completed
                <q-icon size="30px" name="celebration" color="red" />
              </p>
              <template v-slot:action>
                <q-btn color="orange-6" @click="addtodo = !addtodo" label="Add Task" />
              </template>
            </q-banner>
            <tasktodoes v-if="Object.keys(taskstodo).length" :taskstodos="taskstodo" />
          </transition>

          <div class="q-mb-xl">
            <taskscompleted
              v-if="Object.keys(taskscompleted).length"
              :taskscompleted="taskscompleted"
            />
            <div class="q-pb-xl"></div>
          </div>
        </q-scroll-area>

        <div class="absolute-bottom q-pb-md text-center no-pointer-events">
          <q-btn
            @click="addtodo = !addtodo"
            class="all-pointer-events"
            color="primary "
            round
            icon="add"
            size="24px"
          ></q-btn>
        </div>
      </template>
      <template v-else>
        <span class="absolute-center">
          <q-spinner color="primary" size="3rem" />
        </span>
      </template>
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
    ...mapState("tasks", ["search", "isFbConnected"]),
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