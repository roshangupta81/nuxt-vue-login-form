

<template>
  <div>
    <ValidationObserver tag='div' class='bg-white pt-6 pb-6 mb-4' ref='form'>
      <b-form @submit.prevent='onSubmit'>

        <b-form-group id="label-email" label="Username" label-for="input-email" class="form-label">
          <validation-provider name="Username" rules="required|email" v-slot="{ errors }">
            <b-form-input id="input-email" v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </b-form-group>

        <b-form-group id="label-password" label="Password" label-for="input-password" class="form-label">
          <validation-provider rules="required" v-slot="{ errors }">
            <b-form-input id="input-password" v-model="form.password" placeholder="Enter Password" type="password">
            </b-form-input>
            <span class="error">{{ errors[0] }}</span>
          </validation-provider>
        </b-form-group>

        <b-row>
          <b-col>
            <b-button type="submit" variant="warning">Login</b-button>
          </b-col>
          <b-col class="text-right">
            <b-form-checkbox id="checkbox-rememberMe" name="checkbox-rememberMe" value="rememberMe">
              Remember Me
            </b-form-checkbox>
          </b-col>
        </b-row>
        <b-row class="text-center support-link-container">
          <b-col sm="2"></b-col>
          <b-col sm="8">
            <a href="#" class="support-link">Reset password</a> |
            <a href="#" class="support-link">Contact Support</a>
          </b-col>
          <b-col sm="2"></b-col>
        </b-row>
        <b-row class="text-center">
          <b-col sm="2"></b-col>
          <b-col sm="8">
            <small class="help-block">
              By logging in, you agree to our <a href="#">Terms of Service</a> and
              <a href="#">Privacy Policy</a>.
            </small>
          </b-col>
          <b-col sm="2"></b-col>
        </b-row>
      </b-form>
    </ValidationObserver>
  </div>
</template>
<style>
.support-link {
  display: inline;
  font-size: 13px;
}

.help-block {
  color: #737373;
  font-size: 10px;
}

.support-link-container {
  margin-top: 5%;
}

.form-label {
  font-weight: 700;
  font-size: 14px;
}

.error {
  color: #a94442;
  font-size: 12px;
  font-weight: 100;
}
</style>
<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
export default {
  name: "LoginForm",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      this.$refs.form.validate().then(success => {
        if (!success) {
          alert('Form has errors!!');
          return
        }
        alert(`Form has been submitted - ${JSON.stringify(this.form)}`);
      });
    },
  },
};
</script>
