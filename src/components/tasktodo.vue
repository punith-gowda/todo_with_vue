<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated absolute-top zoomOut"
  >
    <div class="bordered-task">
      <q-banner
        v-if="!settings.showtaskinList"
        dense
        inline-actions
        class="text-white bg-orange-5 text-center"
      >
        <span class="text-bold text-h5">Todo</span>
      </q-banner>

      <q-list separator bordered>
        <task
          v-for="(task, key) in taskstodos"
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
  props: ["taskstodos"],
  computed: {
    ...mapGetters("settings", ["settings"]),
  },
  components: {
    task: require("components/task.vue").default,
  },
};
</script>

<style>
</style>