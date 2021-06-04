<template>
  <q-page padding>
    <q-list bordered>
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12hrformat" />
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show Tasks in One List</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showtaskinList" />
        </q-item-section>
      </q-item>
    </q-list>
    <q-list bordered class="q-mt-md">
      <q-item-label header>More</q-item-label>
      <q-item tag="label" v-ripple to="/settings/help">
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label" @click="visitMyWebsite" v-ripple>
        <q-item-section>
          <q-item-label>Visit to My Website</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
      <q-item tag="label" @click="EmailUs" v-ripple>
        <q-item-section>
          <q-item-label>Email Us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right"></q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from "quasar";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("settings", ["settings"]),
    show12hrformat: {
      get() {
        return this.settings.show12hrformat;
      },
      set(value) {
        this.set12timeformat(value);
      },
    },
    showtaskinList: {
      get() {
        return this.settings.showtaskinList;
      },
      set(value) {
        this.settaskinList(value);
      },
    },
  },
  methods: {
    ...mapActions("settings", ["set12timeformat", "settaskinList"]),
    visitMyWebsite() {
      openURL("https://punith.netlify.app/");
    },
    EmailUs() {
      window.location.href =
        "mailto:poppunith2001@gmail.com?subject=Vue Todo Feedback";
    },
  },
};
</script>

<style>
</style>
