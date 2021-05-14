<template>
  <q-input
    :value="duetime"
    mask="time"
    @input="$emit('update:duetime', $event)"
    :rules="['time']"
    filled
    label="DueTime"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy transition-show="scale" transition-hide="scale">
          <q-time :value="duetime" @input="$emit('update:duetime', $event)">
            <div class="row items-center justify-end">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script>
export default {
  props: ["duetime"],
};
</script>

<style>
</style>e