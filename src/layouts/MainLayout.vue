<template>
  <q-layout view="hHh lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center text-bold">Vue Todo</q-toolbar-title>
        <q-btn
          flat
          v-if="!isLoggedin"
          class="absolute-right text-bold"
          icon-right="account_circle"
          label="Log-In"
          to="/auth"
        ></q-btn>
        <q-btn
          flat
          v-else
          @click="logOutUser"
          class="absolute-right text-bold"
          icon-right="account_circle"
          label="Log-Out"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :breakpoint="767"
      bordered
      :width="250"
      content-class="bg-primary"
    >
      <q-list>
        <q-item
          clickable
          class="text-black q-pt-lg"
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          exact
        >
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-tabs class="text-black space-between">
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to"
          active-class="text-white"
          exact
        />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/",
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings",
        },
      ],
    };
  },
  computed: {
    ...mapState("auth", ["isLoggedin"]),
  },
  methods: {
    ...mapActions("auth", ["logOutUser"]),
  },
};
</script>

<style lang='scss' >
@media screen and (min-width: 765px) {
  .q-footer {
    display: none;
  }
  .q-drawer .q-router-link--exact-active {
    color: rgb(255, 255, 255) !important;
  }
}

@media screen and (max-width: 765px) {
  .q-drawer {
    display: none;
  }
}
</style>
