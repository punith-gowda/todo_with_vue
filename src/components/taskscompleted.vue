<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="bordered-task" :class="{ 'q-mt-lg': !settings.showtaskinList }">
      <q-banner
        dense
        v-if="!settings.showtaskinList"
        inline-actions
        class="text-white bg-light-green-5 text-center"
      >
        <span class="text-bold text-h5">Completed</span>
      </q-banner>
      <q-list separator bordered>
        <task
          v-for="(task, key) in taskscompleted"
          :key="key"
          :task="task"
          :id="key"
        ></task>
      </q-list>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["taskscompleted"],
  components: {
    task: require("components/task.vue").default,
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
};
</script>

<style>
</style>