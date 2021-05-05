<template>
  <q-page class="q-pa-md">
    <q-list separator bordered>
      <q-item
        v-for="(task, key) in tasks"
        clickable
        :key="key"
        :class="!task.completed ? 'bg-orange-2' : 'bg-green-2'"
        @click="task.completed == !task.completed"
        tag="label"
        v-ripple
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{ 'text-strike': task.completed }">{{
            task.name
          }}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <div class="row">
            <div class="column justify-center q-pr-sm">
              <q-icon name="event" size="18px" />
            </div>
            <div class="col">
              <q-item-label class="row justify-end" caption>{{
                task.duedate
              }}</q-item-label>
              <q-item-label class="row justify-end" caption
                ><small>{{ task.duetime }}</small></q-item-label
              >
            </div>
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("tasks", ["tasks"]),
  },
};
</script>
<style>
</style>