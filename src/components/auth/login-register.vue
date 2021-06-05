<template>
  <q-form @submit.prevent="submitform">
    <div class="row q-mb-md">
      <q-banner class="bg-grey-3 col">
        <template v-slot:avatar>
          <q-icon name="account_circle" color="primary" />
        </template>
        {{tab}} to access your Todos anywhere
      </q-banner>
    </div>

    <div class="row q-mb-md">
      <q-input
        type="email"
        placeholder="example@google.com"
        outlined
        ref="email"
        v-model="formData.email"
        class="col-12 q-mb-md"
        label="Email"
      />
      <q-input
        outlined
        ref="password"
        :type="isPwd ? 'password' : 'text'"
        v-model="formData.password"
        class="col-12"
        label="Password"
        lazy-rules
        :rules="[ val => val.length >= 6 || 'Please enter minimum 6 characters']"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
    </div>
    <div class="row">
      <q-space />
      <q-btn type="submit" :label="tab" color="primary"></q-btn>
    </div>
  </q-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["tab"],
  data() {
    return {
      isPwd: true,
      formData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser", "loginUser"]),
    submitform() {
      this.$refs.email.validate();
      this.$refs.email.validate();
      if (!this.$refs.email.hasErrors && !this.$refs.password.hasErrors) {
        if (this.tab == "Login") {
          this.loginUser(this.formData);
        } else {
          this.registerUser(this.formData);
        }
      }
    },
  },
};
</script>

<style>
</style>