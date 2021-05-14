<template>
  <q-item
    clickable
    :class="!task.completed ? 'bg-orange-2' : 'bg-green-2'"
    @click="
      updatetask({
        id: id,
        updates: {
          completed: !task.completed,
        },
      })
    "
    tag="label"
    v-ripple
  >
    <q-item-section side top>
      <q-checkbox :value="task.completed" class="no-pointer-events" />
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
    <q-item-section side>
      <div class="row">
        <q-btn
          round
          unelevated
          @click.stop="confirmedit = !confirmedit"
          dense
          text-color="blue-11"
          icon="edit"
        />
        <q-btn
          round
          unelevated
          @click.stop="confirmdelete = !confirmdelete"
          dense
          text-color="red-11"
          icon="delete"
        />
      </div>
      <q-dialog v-model="confirmedit" persistent>
        <edittask :task="task" :id="id" @close="confirmedit = false" />
      </q-dialog>
      <q-dialog v-model="confirmdelete" persistent>
        <q-card style="width: 300px">
          <q-card-section>
            <div class="text-h6">confirmdelete</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Do you wish to delete?
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-teal">
            <q-btn flat label="OK" @click.stop="deletetask(id)" v-close-popup />
            <q-btn flat label="Cancel" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item-section>
  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  components: {
    addtask: require("components/addtodotask.vue").default,
    edittask: require("components/edittask.vue").default,
  },
  methods: {
    ...mapActions("tasks", ["updatetask", "deletetask"]),
  },
  data() {
    return {
      confirmdelete: false,
      confirmedit: false,
    };
  },
};
</script>

<style>
</style>