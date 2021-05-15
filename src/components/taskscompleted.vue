<template>
  <div class="bordered-task q-mt-lg">
    <q-banner
      dense
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
</template>

<script>
export default {
  props: ["taskscompleted"],
  components: {
    task: require("components/task.vue").default,
  },
};
</script>

<style>
</style>