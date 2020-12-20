<template>
  <v-row>
    <v-col align="center" justify="center">
      <v-card class="login-container pb-4 align-self-center">
        <v-card-text class="pa-10">
          <validation-observer
            tag="v-form"
            ref="validator"
            v-if="(type === undefined || type === 'user') && isValidation"
          >
            <input-text
              :name="$t('auth.username')"
              rules="required|email"
              type="email"
              v-model="username"
              :label="$t('auth.username')"
              required
            ></input-text>

            <v-btn
              @click.prevent="buttonPressed"
              color="primary"
              type="submit"
              block
            >
              {{ buttonTitle }}
            </v-btn>
          </validation-observer>

          <validation-observer
            tag="v-form"
            ref="validator"
            v-if="isLogin && !isSignup"
          >
            <input-text
              :name="$t('auth.username')"
              v-model="username"
              rules="required|email"
              type="email"
              :label="$t('auth.username')"
              required
            ></input-text>
            <input-text
              type="password"
              :name="$t('auth.password')"
              rules="required|min:7"
              v-model="password"
              :label="$t('auth.password')"
              required
            ></input-text>
            <v-btn
              @click.prevent="buttonPressed"
              color="primary"
              type="submit"
              block
            >
              {{ buttonTitle }}
            </v-btn>

            <v-btn
              style="margin-top:10px;"
              v-if="step === 'signup'"
              @click.prevent="isSignup"
              color="primary"
              type="submit"
              block
            >
              {{ $t("common.signup") }}
            </v-btn>
          </validation-observer>

          <validation-observer tag="v-form" ref="validator" v-if="isSignup">
            <h2 class="mb-10">{{ $t("auth.signup") }}</h2>
            <div>
              <input-text
                :name="$t('auth.username')"
                v-model="username"
                :label="$t('auth.username')"
                rules="required|email"
                type="email"
                required
              ></input-text>
              <input-text
                :name="$t('auth.name')"
                rules="required"
                v-model="name"
                :label="$t('auth.name')"
                required
              ></input-text>
              <input-text
                type="password"
                :name="$t('auth.password')"
                rules="required|min:7"
                v-model="password"
                :label="$t('auth.password')"
                required
              ></input-text>

              <input-text
                v-model="(company || {}).name"
                :name="$t('auth.company')"
                rules="required|min:7"
                :label="$t('common.company')"
                required
                readonly
              ></input-text>

              <input-text
                readonly
                :name="$t('auth.country')"
                rules="required|min:7"
                v-model="(country || {}).name"
                :label="$t('auth.company_country')"
                required
              ></input-text>
            </div>

            <v-btn
              @click.prevent="buttonPressed"
              color="primary"
              type="submit"
              block
            >
              {{ buttonTitle }}
            </v-btn>
          </validation-observer>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col v-if="isSignup" align="center" justify="center">
      <v-card>
        <v-card-text>
          <div>
            <h3>
              {{ $t("auth.choose_company") }}
            </h3>
            <company-selector v-model="company"></company-selector>
            <country-selector v-model="country"></country-selector>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import jwt from "jwt-decode";
import Logo from "@/components/Logo.vue";

import CompanySelector from "@/components/base/CompanySelector";
import CountrySelector from "@/components/base/CountrySelector";

export default {
  components: { Logo, CompanySelector, CountrySelector },
  layout: "auth",
  meta: { public: true },
  data() {
    return {
      country: { location_id: 47, name: "COLOMBIA", code: "CO" },
      company: undefined,
      username: undefined,
      password: undefined,
      step: "validation",
      passwordConfirmation: undefined,
      email: undefined,
      type: undefined,
      name: undefined,
    };
  },
  computed: {
    buttonTitle() {
      switch (this.step) {
        case "signup":
          return this.$t("common.signup");
        case "login":
          return this.$t("common.login");
        default:
          return this.$t("common.continue");
      }
    },
    isSignup() {
      return this.step === "signup";
    },
    isLogin() {
      return this.step === "login";
    },
    isValidation() {
      return this.step === "validation";
    },
  },
  watch: {
    country(val) {
      console.log("CHANGE ", val);
    },
  },
  methods: {
    ...mapActions({
      login: "auth/login",
      signup: "auth/signup",
    }),
    buttonPressed() {
      console.log(this.step);
      switch (this.step) {
        case "signup":
          this.createUser();
          break;
        case "login":
          this.performLogin();
          break;
        case "validation":
          this.validateUsername();
          break;
        default:
          break;
      }
    },
    async createUser() {
      try {
        const { username, password, name, company, country } = this.$data;
        const token = await this.signup({
          email: username,
          password,
          name,
          company_id: company.id,
          location_id: country.location_id,
        });
        this.$router.push(`/company/`);
      } catch (error) {
        console.error(error);
      }
    },

    async validateUsername() {
      try {
        const valid = await this.$axios.$post(`/auth/validate`, {
          email: this.username,
        });
        this.step = "login";
      } catch (error) {
        console.error(error);
        if (
          error.response.status === 404 &&
          error.response.data.error &&
          !error.response.data.error.code
        ) {
          this.step = "signup";
        }
      }
    },
    async performLogin() {
      const valid = await this.$refs.validator.validate();
      if (!valid) return;

      try {
        const { token } = await this.login({
          email: this.username,
          password: this.password,
        });
        this.$router.push(`/company/`);
      } catch (error) {
        console.error(error);
      }
    },
  },
  watch: {
    type(val) {
      if (val !== "user") this.step = "login";
      else this.step = "validation";
    },
  },
};
</script>
<style scoped>
.logo {
  border-radius: 50%;
}
.login-container {
  max-width: 600px;
  min-width: 400px;
  border-radius: 5px;
}
.login-btn-title {
  font-size: 14px;
  line-height: 16px;

  text-align: center;
  letter-spacing: 0.75px;
  text-transform: uppercase;
}
</style>
