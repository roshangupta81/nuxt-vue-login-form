<template>
  <b-container>
    <b-row align-v="center" class="app">
      <b-col sm="2" lg="4"></b-col>
      <b-col sm="8" lg="4" class="form-container">
        <b-row class="text-center">
          <b-col sm="2"></b-col>
          <b-col sm="8">
            <Logo />
          </b-col>
          <b-col sm="2"></b-col>
        </b-row>

        <LoginForm />
      </b-col>
      <b-col sm="2" lg="4"></b-col>
    </b-row>
  </b-container>
</template>

<style>
.form-container {
  background-color: #fff;
  padding: 2%;
}

.app {
  margin-top: 15%;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
