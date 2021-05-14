<template>
  <q-input
    @input="$emit('update:duedate', $event)"
    :rules="['date']"
    filled
    label="DueDate"
    :value="duedate"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy
          ref="qDateProxy"
          transition-show="scale"
          transition-hide="scale"
        >
          <q-date :value="duedate" @input="$emit('update:duedate', $event)">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["duedate"],
};
</script>

<style>
</style>